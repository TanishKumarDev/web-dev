import React, { useContext } from 'react';
import UserContext from './context/UserContext';

const Dashboard = () => {
  const user = useContext(UserContext);
  return <h2>Welcome, {user.name}</h2>;
};

export default Dashboard;
