import React from 'react';
import './TextToggler.css'; // Your custom styles

const TextToggler = () => {
  const [isTextOne, setIsTextOne] = React.useState(true);

  const toggleText = () => {
    setIsTextOne(!isTextOne);
  };

  return (
    <div className="text-toggler-wrapper">
      <h1>{isTextOne ? "This is true" : "This is false"}</h1>

      <div
        className={`text-toggler-button ${isTextOne ? 'true-state' : 'false-state'}`} //Div khud kuch nahi karta, bas condition ke base pe output de raha hai
        onClick={toggleText}
      >
        Toggle State
      </div>
    </div>
  );
};

export default TextToggler;
