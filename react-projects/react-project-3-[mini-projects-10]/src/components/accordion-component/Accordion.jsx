// src/components/Accordion.jsx
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const accordionData = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It uses a component-based architecture.",
  },
  {
    id: 2,
    question: "What is a Hook in React?",
    answer:
      "Hooks are special functions that let you use React features like state and lifecycle in functional components.",
  },
  {
    id: 3,
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind is a utility-first CSS framework that lets you design directly in your HTML with pre-defined classes.",
  },
];

export default function Accordion() {
  // which accordion is open
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id); // collapse if already open
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold mb-8">FAQ - Accordion Example</h1>
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md divide-y divide-gray-200">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            data={item}
            isOpen={openId === item.id}
            toggle={() => toggleAccordion(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
