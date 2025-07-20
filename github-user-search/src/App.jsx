import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import UserCard from './components/UserCard';
import './index.css';

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('lastUsername') || '');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Debounced fetch function
  const fetchUser = useCallback(
    debounce(async (username) => {
      if (!username.trim()) {
        setError('Please enter a username');
        return;
      }

      setLoading(true);
      setUserData(null);
      setError('');

      try {
        const res = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            // Optional: Add GitHub token for higher rate limits
            // Authorization: `token YOUR_TOKEN`
          },
        });

        if (res.status === 403) {
          setError('API rate limit exceeded. Please try again later.');
          return;
        }

        const data = await res.json();

        if (data.message === 'Not Found') {
          setError('User not found.');
        } else {
          setUserData(data);
          localStorage.setItem('lastUsername', username); // Persist username
        }
      } catch{
        setError('Something went wrong. Please check your connection.');
      } finally {
        setLoading(false);
      }
    }, 500), // 500ms debounce delay
    []
  );

  // Trigger search on Enter key or button click
  const handleSearch = () => {
    fetchUser(username);
  };

  // Load last searched user on mount
  useEffect(() => {
    if (username) {
      fetchUser(username);
    }
  }, []); // Run once on component mount

  return (
    <div className="container">
      <h1>🔍 GitHub User Search</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="search-input"
          aria-label="Search GitHub username"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      {loading && <div className="spinner" aria-label="Loading"></div>}
      {error && <p className="error">{error}</p>}
      {userData && <UserCard userData={userData} />}
    </div>
  );
};

export default App;