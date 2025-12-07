import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { sampleProducts } from "../../assets/sampleData.js";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(sampleProducts);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product")
        .then((res) => {
          console.log("Fetched products:", res.data);
          setProducts(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  async function deleteProduct(productId) {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      await axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/product/" + productId, {
        headers: { Authorization: "Bearer " + token },
      });
      toast.success("Product deleted successfully");
      setIsLoading(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  }

  return (
    <div className="relative w-full h-full p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Add Product Button */}
      <Link
        to="/admin/add-product"
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white 
                  text-2xl font-bold w-12 h-12 flex items-center justify-center 
                  rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        +
      </Link>

      {/* Loading State */}
      {isLoading ? (
        <div className="w-full h-full flex flex-col justify-center items-center py-20">
          <div className="w-[50px] h-[50px] border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-blue-600 font-semibold text-lg mt-4">Loading products...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white text-sm uppercase tracking-wider">
              <tr>
                <th className="py-3 px-2">ID</th>
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2">Image</th>
                <th className="py-3 px-2">Labelled Price</th>
                <th className="py-3 px-2">Price</th>
                <th className="py-3 px-2">Stock</th>
                <th className="py-3 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="py-3 px-2 text-gray-700">{item.productId}</td>
                  <td className="py-3 px-2 font-medium text-gray-800">{item.name}</td>
                  <td className="py-3 px-2">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md mx-auto shadow-sm"
                    />
                  </td>
                  <td className="py-3 px-2 text-gray-600">Rs.{item.labelledPrice}</td>
                  <td className="py-3 px-2 text-gray-600">Rs.{item.price}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.stock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.stock}
                    </span>
                  </td>
                  <td className="py-3 px-2 flex justify-center items-center gap-3">
                    <button
                      onClick={() => deleteProduct(item.productId)}
                      className="p-2 bg-red-100 hover:bg-red-200 rounded-md transition"
                      title="Delete"
                    >
                      <FaTrashAlt className="text-red-600 text-lg" />
                    </button>
                    <button
                      onClick={() => navigate(`/admin/edit-product/`, { state: item })}
                      className="p-2 bg-blue-100 hover:bg-blue-200 rounded-md transition"
                      title="Edit"
                    >
                      <FaEdit className="text-blue-600 text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
