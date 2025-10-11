import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const productsData = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "T-Shirt", category: "Clothing", price: 25 },
  { id: 3, name: "Headphones", category: "Electronics", price: 200 },
  { id: 4, name: "Sneakers", category: "Footwear", price: 80 },
  { id: 5, name: "Jeans", category: "Clothing", price: 50 },
  { id: 6, name: "Smartphone", category: "Electronics", price: 900 },
];
export default function ProductList() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 2000]); // min-max range

  // Filtering Logic
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      product.price >= priceFilter[0] && product.price <= priceFilter[1];

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

      {/* Filter Panel */}
      <ProductFilter
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
