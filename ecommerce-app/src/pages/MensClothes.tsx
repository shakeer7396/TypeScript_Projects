import React, { useState, useEffect } from "react";
import axios from "axios";

const MensClothes: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSort = (option: string) => {
    setSortOption(option);
    const sortedProducts = [...products];
    if (option === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Men's Clothes</h1>
      <div className="mb-4">
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="default">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      {loading ? (
        <div className=" flex justify-center items-center text-center">
          <h3>Loading products...</h3>
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>{" "}
          {/* Add a CSS spinner if required */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 flex flex-col items-center shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2 text-center">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MensClothes;
