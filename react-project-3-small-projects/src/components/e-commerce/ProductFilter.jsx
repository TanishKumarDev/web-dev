export default function ProductFilter({
  categoryFilter,
  setCategoryFilter,
  searchTerm,
  setSearchTerm,
  priceFilter,
  setPriceFilter,
}) {
  const categories = ["All", "Electronics", "Clothing", "Footwear"];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none w-full md:w-1/3"
      />

      {/* Category Filter */}
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Price Filter */}
      <input
        type="range"
        min="0"
        max="2000"
        value={priceFilter[1]}
        onChange={(e) => setPriceFilter([0, Number(e.target.value)])}
        className="w-full md:w-1/3"
      />
      <span className="text-gray-600">${priceFilter[0]} - ${priceFilter[1]}</span>
    </div>
  );
}
