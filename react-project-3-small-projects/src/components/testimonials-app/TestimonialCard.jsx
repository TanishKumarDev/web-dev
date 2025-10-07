// src/components/TestimonialCard.jsx
export default function TestimonialCard({ data }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center transition-all duration-300">
      <img
        src={data.image}
        alt={data.name}
        className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h2 className="text-xl font-semibold">{data.name}</h2>
      <p className="text-sm text-gray-500 mb-3">{data.role}</p>
      <p className="text-gray-700 italic">“{data.feedback}”</p>
    </div>
  );
}
