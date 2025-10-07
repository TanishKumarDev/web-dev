// src/components/TestimonialsList.jsx
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    name: "User 1",
    role: "Frontend Developer",
    feedback: "React has completely changed how I think about UI development!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "User 2",
    role: "UI/UX Designer",
    feedback: "Tailwind CSS makes styling so effortless and fun.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "User 3",
    role: "Full Stack Engineer",
    feedback: "Hooks made me understand the logic behind functional components deeply!",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

export default function TestimonialsList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Testimonials</h1>

      <TestimonialCard data={testimonialsData[currentIndex]} />

      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
