import React, { useEffect, useState } from "react";
import axios from "axios";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        className="border p-2 mb-4 w-80"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <div className=" flex justify-center items-center text-center">
          <h3>Loading products...</h3>
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>{" "}
          {/* Add a CSS spinner if required */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product: any) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2 text-center">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
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

export default Home;
