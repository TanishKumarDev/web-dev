// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserContext from "./context/UserContext";

// Parent component
function Parent() {
  const message = "Hello from Parent";
  return (
    <div>
      <Child message={message} />
    </div>
  );
}

// Child component (doesn’t use message)
function Child({ message }) {
  return (
    <div>
      <Grandchild message={message} />
    </div>
  );
}

// Grandchild component (uses message)
function Grandchild({ message }) {
  return <p>Message: {message}</p>;
}

function App() {
  const user = { name: "Tanish", email: "tanish@example.com" };
  return (
    <UserContext.Provider value={user}>
      <div>
        <Header />
        <Parent />
         <Dashboard />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
