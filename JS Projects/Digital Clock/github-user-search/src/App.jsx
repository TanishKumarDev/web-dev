import { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setUserData(data);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🔍 GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={fetchUser}>Search</button>

      {userData && (
        <div>
          <img src={userData.avatar_url} width="100" alt="Avatar" />
          <h2>{userData.name}</h2>
          <p>@{userData.login}</p>
          <p>{userData.bio}</p>
          <p>
            Repos: {userData.public_repos} | Followers: {userData.followers}
          </p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
