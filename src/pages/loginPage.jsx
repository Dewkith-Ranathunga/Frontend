import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault(); // Prevent page reload
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      });
      toast.success("Login successful!");
      console.log(response.data);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-evenly items-center">
      <div className="w-[50%] h-full"></div>

      <div className="w-[50%] h-full flex justify-center items-center bg-white-100 bg-opacity-80 rounded-lg shadow-lg">
        <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center p-8 bg-white bg-opacity-70">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
