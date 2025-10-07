export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
}
