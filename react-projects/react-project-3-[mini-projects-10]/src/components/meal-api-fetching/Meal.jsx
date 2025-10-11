import axios from "axios";
import { useState, useEffect } from "react";

function Meal() {
  const [items, setItems] = useState([]);
  const [numToShow, setNumToShow] = useState(6); // control number of items

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        setItems(res.data.meals);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const itemsList = items
    .slice(0, numToShow) // show only first numToShow items
    .map(({ strMeal, strMealThumb, idMeal }) => (
      <section key={idMeal} className="flex flex-col p-6 bg-white rounded-lg shadow-md">
        <img className="w-full" src={strMealThumb} alt={strMeal} />
        <section className="mt-4">
          <h2 className="text-2xl font-semibold">{strMeal}</h2>
          <p className="text-sm text-gray-600">#{idMeal}</p>
        </section>
      </section>
    ));

  return (
    <div>
      {/* Input to control number of items */}
      <div className="mb-4">
        <label className="mr-2">Number of meals to show:</label>
        <input
          type="number"
          min="1"
          max={items.length}
          value={numToShow}
          onChange={(e) => setNumToShow(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsList}
      </div>
    </div>
  );
}

export default Meal;
