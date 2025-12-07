import { Link, Route, Routes, useLocation } from 'react-router-dom';
import AddProductPage from './admin/addProductPage.jsx';
import AdminOrdersPage from './admin/adminOrdersPage.jsx';
import EditProductPage from './admin/editProductPage.jsx';
import AdminProductsPage from './admin/productsPage.jsx';

export default function AdminPage() {
  const location = useLocation();
  const pathname = location.pathname;

  function getClass(name) {
    return pathname.includes(name)
      ? "bg-blue-700 text-white font-semibold rounded-md px-3 py-2 transition"
      : "text-gray-300 hover:text-white hover:bg-blue-800 rounded-md px-3 py-2 transition";
  }

  return (
    <div className="w-full h-screen flex font-[var(--font-fancy)] bg-gray-50">
      {/* Sidebar */}
      <div className="h-full w-[280px] bg-blue-900 flex flex-col p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6">Admin Panel</h1>
        <nav className="flex flex-col gap-2">
          <Link className={getClass("products")} to="/admin/products">Products</Link>
          <Link className={getClass("users")} to="/admin/users">Users</Link>
          <Link className={getClass("orders")} to="/admin/orders">Orders</Link>
          <Link className={getClass("reviews")} to="/admin/reviews">Reviews</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 h-full p-6 overflow-y-auto">
        <Routes>
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="edit-product" element={<EditProductPage />} />
          <Route path="orders" element={<AdminOrdersPage />} />
        </Routes>
      </div>
    </div>
  );
}
