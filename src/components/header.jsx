import { Link } from "react-router-dom";

export default function Header() {
    console.log("Header component is loading...")
    return(
        <div className="bg-red-800 text-white p-4">
            <Link to ="/signup">Sign Up</Link>
        </div>
    )
}