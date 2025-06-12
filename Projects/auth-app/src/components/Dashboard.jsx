import { useNavigate } from 'react-router-dom';

function Dashboard({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome, {user.username}!</h2>
      <p className="text-center mb-4">You have successfully logged in.</p>
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;