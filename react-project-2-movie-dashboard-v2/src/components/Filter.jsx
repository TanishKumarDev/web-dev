    const Filter = ({ filterRating, setFilterRating }) => (
  <div className="mt-4 flex items-center gap-2">
    <label>Filter by rating:</label>
    <select
      value={filterRating}
      onChange={(e) => setFilterRating(Number(e.target.value))}
      className="border px-2 py-1 rounded"
    >
      <option value="">All</option>
      <option value={1}>1+</option>
      <option value={2}>2+</option>
      <option value={3}>3+</option>
      <option value={4}>4+</option>
      <option value={5}>5</option>
    </select>
  </div>
);

export default Filter;
