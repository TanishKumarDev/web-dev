import { useState, useCallback, useEffect } from "react";
import { getPlaylistVideos, getVideoDuration, iso8601ToSeconds } from "./youtube";

export const usePlaylistDuration = (apiKey) => {
  const [playlistId, setPlaylistId] = useState("");
  const [totalTime, setTotalTime] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Validate playlist ID format (basic check for YouTube playlist IDs)
  const isValidPlaylistId = (id) => {
    return id.trim() && /^PL[0-9A-Za-z_-]{10,}$/.test(id);
  };

  // Load history from LocalStorage on mount
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem("playlistHistory");
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (err) {
      console.warn("Failed to parse playlist history from LocalStorage:", err);
    }
  }, []);

  const calculatePlaylistDuration = useCallback(async () => {
    if (!playlistId.trim()) {
      setError("Please enter a playlist ID.");
      return;
    }
    if (!isValidPlaylistId(playlistId)) {
      setError("Invalid playlist ID. It should start with 'PL' and be at least 12 characters long.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const videoIds = await getPlaylistVideos(playlistId, apiKey);
      if (videoIds.length === 0) {
        setError("No videos found in the playlist.");
        setLoading(false);
        return;
      }

      // Batch video duration requests (up to 50 IDs per request)
      let totalSeconds = 0;
      const batchSize = 50;
      for (let i = 0; i < videoIds.length; i += batchSize) {
        const batchIds = videoIds.slice(i, i + batchSize).join(",");
        try {
          const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${batchIds}&key=${apiKey}`;
          const response = await fetch(url);
          if (!response.ok) {
            if (response.status === 403) {
              throw new Error("API quota exceeded or invalid API key.");
            }
            throw new Error("Failed to fetch video durations.");
          }
          const data = await response.json();
          if (data.items) {
            data.items.forEach((item) => {
              if (item.contentDetails?.duration) {
                totalSeconds += iso8601ToSeconds(item.contentDetails.duration);
              }
            });
          }
        } catch (err) {
          console.warn(`Failed to fetch batch ${i / batchSize + 1}:`, err);
        }
      }

      if (totalSeconds === 0) {
        setError("No valid video durations found in the playlist.");
        setLoading(false);
        return;
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const result = { hours, minutes, seconds, playlistId };
      setTotalTime(result);

      // Save to LocalStorage history (keep last 5 entries)
      const updatedHistory = [
        { ...result, timestamp: new Date().toISOString() },
        ...history.filter((entry) => entry.playlistId !== playlistId), // Avoid duplicates
      ].slice(0, 5);
      setHistory(updatedHistory);
      localStorage.setItem("playlistHistory", JSON.stringify(updatedHistory));
    } catch (err) {
      setError(err.message || "Failed to fetch playlist data. Please check your API key or playlist ID.");
    } finally {
      setLoading(false);
    }
  }, [playlistId, apiKey]); // Removed history from dependencies

  // Clear history function
  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem("playlistHistory");
  }, []);

  return {
    playlistId,
    setPlaylistId,
    totalTime,
    error,
    loading,
    history,
    calculatePlaylistDuration,
    clearHistory,
  };
};