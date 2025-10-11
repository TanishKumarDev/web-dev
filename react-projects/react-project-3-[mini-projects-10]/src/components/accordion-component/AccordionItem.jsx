// src/components/AccordionItem.jsx
export default function AccordionItem({ data, isOpen, toggle }) {
  return (
    <div>
      {/* Header */}
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
      >
        <span>{data.question}</span>
        <span className="text-gray-500">{isOpen ? "-" : "+"}</span>
      </button>

      {/* Content (conditionally rendered) */}
      {isOpen && (
        <div className="px-5 pb-4 text-gray-600 transition-all duration-300">
          {data.answer}
        </div>
      )}
    </div>
  );
}
