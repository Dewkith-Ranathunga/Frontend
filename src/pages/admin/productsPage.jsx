import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import { sampleProducts } from "../../assets/sampleData.js";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(sampleProducts);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading === true) {
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
    if (token == null) {
      toast.error("Please login first");
      return;
    }

    try {
      await axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/product/" + productId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      toast.success("Product deleted successfully");
      setIsLoading(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  }

  return (
    <div className="relative w-full h-full max-h-full overflow-y-scroll p-4">
      <Link
        to="/admin/add-product"
        className="absolute bottom-5 right-5 m-4 
                 bg-blue-600 text-white text-xl px-4 py-2 
                 rounded shadow-lg hover:bg-blue-700 
                 transition duration-200 cursor-pointer"
      >
        +
      </Link>
      
      {isLoading ?
      <div className='w-full h-full flex flex-col justify-center items-center py-20'>
        <div className="w-[50px] h-[50px] border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-blue-600 font-semibold text-lg mt-4">Loading products...</p>
      </div> : (
        <table className="w-full text-center bg-white shadow rounded">
          <thead className="bg-blue-100">
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Labelled Price</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="border-t">
                <td>{item.productId}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.images[0]} className="w-[50px] h-[50px] object-cover mx-auto" />
                </td>
                <td>{item.labelledPrice}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>
                  <div className='flex justify-center items-center w-full'>
                    <FaTrashAlt className='text-[20px] text-red-500 mx-2 cursor-pointer' onClick={() => deleteProduct(item.productId)} />
                    <FaEdit
                      onClick={() => navigate(`/admin/edit-product/`, { state: item })}
                      className='text-[20px] text-blue-500 mx-2 cursor-pointer'
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
