import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleProducts } from "../../assets/sampleData.js";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(sampleProducts);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product")
      .then((res) => {
        console.log(res.data);
        // Uncomment when ready to update actual products
        // setProducts(res.data);
      })
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

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

      <table className="w-full text-center bg-white shadow rounded">
        <thead className="bg-blue-100">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Labelled Price</th>
            <th>Price</th>
            <th>Stock</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
