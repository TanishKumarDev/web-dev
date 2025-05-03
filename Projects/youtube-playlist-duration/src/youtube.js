import axios from "axios";

// Fetch video IDs from a playlist, handling pagination
export const getPlaylistVideos = async (playlistId, apiKey) => {
  const videos = [];
  let nextPageToken = "";

  try {
    while (nextPageToken !== undefined) {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=50&pageToken=${nextPageToken}&key=${apiKey}`;
      const response = await axios.get(url);
      const data = response.data;

      if (!data.items || data.items.length === 0) break;

      data.items.forEach((item) => {
        if (item.contentDetails?.videoId) {
          videos.push(item.contentDetails.videoId);
        }
      });

      nextPageToken = data.nextPageToken;
    }
    return videos;
  } catch (error) {
    throw new Error(
      error.response?.status === 404
        ? "Playlist not found. Please check the playlist ID."
        : error.response?.status === 403
        ? "API quota exceeded or invalid API key."
        : "Failed to fetch playlist videos."
    );
  }
};

// Fetch duration of a single video
export const getVideoDuration = async (videoId, apiKey) => {
  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${apiKey}`;
    const response = await axios.get(url);
    const data = response.data;

    if (data.items?.length > 0 && data.items[0].contentDetails?.duration) {
      return data.items[0].contentDetails.duration;
    }
    return null;
  } catch (error) {
    console.warn(`Failed to fetch duration for video ${videoId}:`, error);
    return null;
  }
};

// Convert ISO 8601 duration (e.g., PT1H2M30S) to total seconds
export const iso8601ToSeconds = (duration) => {
  if (!duration) return 0;

  let hours = 0,
    minutes = 0,
    seconds = 0;

  const hoursMatch = duration.match(/(\d+)H/);
  const minutesMatch = duration.match(/(\d+)M/);
  const secondsMatch = duration.match(/(\d+)S/);

  if (hoursMatch) hours = parseInt(hoursMatch[1]);
  if (minutesMatch) minutes = parseInt(minutesMatch[1]);
  if (secondsMatch) seconds = parseInt(secondsMatch[1]);

  return hours * 3600 + minutes * 60 + seconds;
};