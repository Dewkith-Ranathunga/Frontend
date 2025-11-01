import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    console.log("Header component is loading...");

    return (
        <header className="w-full h-20 bg-white shadow-md px-6 flex items-center justify-between">
            <img
                onClick={() => navigate("/")}
                src="/logo.png"
                alt="Logo"
                className="h-14 w-14 object-cover cursor-pointer"
            />
            <nav className="flex gap-6 text-gray-700 font-medium">
                <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
                <Link to="/about" className="hover:text-blue-600 transition">About</Link>
                <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                <Link to="/search" className="hover:text-blue-600 transition">Search</Link>

            </nav>

            <div className="w-[80px] flex justify-center items-center">
                <Link to="/cart" className="text-[20px] font-bold text-gray-700 hover:text-blue-600 transition">
                    <BsCart3/>
                </Link>
            </div>
        </header>
    );
}
