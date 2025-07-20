const UserCard = ({ userData }) => {
  return (
    <div className="user-card">
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className="avatar" />
      <h2>{userData.name || userData.login}</h2>
      <p className="login">@{userData.login}</p>
      {userData.bio && <p className="bio">{userData.bio}</p>}
      <p className="stats">
        Repos: {userData.public_repos} | Followers: {userData.followers} | Following: {userData.following}
      </p>
      <a href={userData.html_url} target="_blank" rel="noreferrer" className="profile-link">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;