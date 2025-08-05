import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    console.log("Header component is loading...");

    return (
        <header className="w-full h-[80px] shadow-2xl relative flex items-center px-4">
            <img
                onClick={() => navigate("/")}
                src="/logo.png"
                alt="Logo"
                className="h-[60px] w-[60px] object-cover mr-6 cursor-pointer"
            />
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </header>
    );
}
