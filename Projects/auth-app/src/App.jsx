import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleRegister = (user) => {
    if (users.some(u => u.username === user.username)) {
      alert('Username already exists');
      return false;
    }
    setUsers([...users, user]);
    return true;
  };

  const handleLogin = ({ username, password }) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    alert('Invalid credentials');
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center ">
        <Routes>
          <Route 
            path="/register" 
            element={<Register onRegister={handleRegister} />} 
          />
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/dashboard" 
            element={currentUser ? <Dashboard user={currentUser} onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route 
            path="/" 
            element={<Navigate to="/register" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;