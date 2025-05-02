import React from "react";

const QuoteCard = ({ quote, author, loading, error, onNewQuote, onSaveQuote }) => {
  return (
<div className="bg-gray-900 text-white rounded-2xl shadow-xl p-8 w-full max-w-xl text-center space-y-6 border border-white">

      {loading ? (
        <p className="animate-pulse text-xl text-gray-300">Loading...</p>
      ) : error ? (
        <div className="space-y-4">
          <p className="text-xl text-red-400">{error}</p>
          <button
            onClick={onNewQuote}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Retry
          </button>
        </div>
      ) : (
        <>
          <p className="text-2xl md:text-3xl font-semibold italic text-gray-200 animate-fade-in">
            "{quote}"
          </p>
          <p className="text-lg text-gray-400">— {author}</p>
        </>
      )}
      {!loading && !error && (
        <div className="flex justify-center gap-4">
          <button
            onClick={onNewQuote}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            New Quote
          </button>
          <button
            onClick={onSaveQuote}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
          >
            Save Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default QuoteCard;