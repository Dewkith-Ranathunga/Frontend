import { Link, Route, Routes } from 'react-router-dom';
import AddProductPage from './admin/addProductPage.jsx';
import AdminProductsPage from './admin/adminProductsPage.jsx';

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex">
      <div className="h-full w-[300px] bg-blue-900 flex flex-col text-white p-4 gap-4">
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/reviews">Reviews</Link>
      </div>

      <div className="h-full w-[calc(100%-300px)] p-4">
        <Routes>
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="add-product" element={<AddProductPage />} />
        </Routes>
      </div>
    </div>
  );
}
