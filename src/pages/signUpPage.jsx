import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/", {
        firstName,
        lastName,
        email,
        password,
      });

      toast.success("Registration successful!");
      console.log(response.data);

      // Redirect to login page after successful signup
      navigate("/login");
    } catch (e) {
      toast.error(e.response?.data?.message || "Signup failed.");
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-evenly items-center">
      <div className="w-[50%] h-full"></div>

      <div className="w-[50%] h-full flex justify-center items-center bg-white-100 bg-opacity-80 rounded-lg shadow-lg">
        <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center p-8 bg-white bg-opacity-70">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
