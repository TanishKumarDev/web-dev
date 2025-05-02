import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [quoteData, setQuoteData] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Load saved quotes from LocalStorage on mount
  useEffect(() => {
    const storedQuotes = localStorage.getItem("savedQuotes");
    if (storedQuotes) {
      setSavedQuotes(JSON.parse(storedQuotes));
    }
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      // Use the random quote endpoint for simplicity
      const res = await fetch("https://dummyjson.com/quotes/random");
      if (!res.ok) throw new Error("Failed to fetch quote");
      const data = await res.json();
      setQuoteData({ content: data.quote, author: data.author });
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      setError("Failed to fetch quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const saveQuote = () => {
    if (quoteData.content && quoteData.author) {
      const newQuote = { content: quoteData.content, author: quoteData.author };
      const updatedQuotes = [...savedQuotes, newQuote];
      setSavedQuotes(updatedQuotes);
      localStorage.setItem("savedQuotes", JSON.stringify(updatedQuotes));
      alert("Quote saved!");
    }
  };

  return (
    <>
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
        QuoteQuest <span className="text-blue-400">🚀</span>
      </h1>
      <QuoteCard
        quote={quoteData.content}
        author={quoteData.author}
        loading={loading}
        error={error}
        onNewQuote={fetchQuote}
        onSaveQuote={saveQuote}
      />
      {savedQuotes.length > 0 && (
        <div className="mt-8 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Saved Quotes</h2>
          <ul className="space-y-4">
            {savedQuotes.map((saved, index) => (
              <li key={index} className="p-4 bg-gray-800 rounded-lg">
                <p className="text-gray-200 italic">"{saved.content}"</p>
                <p className="text-gray-400 text-sm">— {saved.author}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}

export default App;