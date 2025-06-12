import React, { useState } from 'react';
import { accordionData } from './components/data';
import AccordionItem from './components/AccordionItem';
import './App.css';

function App() {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <h1>Accordion</h1>

      <div className="accordion">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openId === item.id}
            onToggle={() => toggleOpen(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
