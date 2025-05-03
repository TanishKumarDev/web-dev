import React from "react";
import { usePlaylistDuration } from "./usePlaylistDuration";

const App = () => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const {
    playlistId,
    setPlaylistId,
    totalTime,
    error,
    loading,
    history,
    calculatePlaylistDuration,
  } = usePlaylistDuration(apiKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePlaylistDuration();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 animate-fade-in">
        YouTube Playlist Duration <span className="text-blue-400">🎥</span>
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter YouTube Playlist ID"
            value={playlistId}
            onChange={(e) => setPlaylistId(e.target.value.trim())}
            className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </div>
        {error && (
          <p className="text-red-400 text-center animate-fade-in">{error}</p>
        )}
      </form>

      {totalTime && (
        <div className="mt-8 text-center animate-fade-in">
          <h2 className="text-2xl font-semibold mb-2">Total Playlist Duration</h2>
          <p className="text-xl text-gray-200">
            {totalTime.hours} hours, {totalTime.minutes} minutes,{" "}
            {totalTime.seconds} seconds
          </p>
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-8 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Recent Calculations</h2>
          <ul className="space-y-4">
            {history.map((entry, index) => (
              <li key={index} className="p-4 bg-gray-800 rounded-lg">
                <p className="text-gray-200">
                  Playlist ID: {entry.playlistId}
                </p>
                <p className="text-gray-200">
                  {entry.hours}h {entry.minutes}m {entry.seconds}s
                </p>
                <p className="text-gray-400 text-sm">
                  Calculated: {new Date(entry.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;