import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductOverviewPage from "./client/productOverview.jsx";
import ProductsPage from "./client/productsPage.jsx";


export default function HomePage() {
    return (
        <div className='w-full h-screen flex flex-col items-center font-fancy'>
            <Header />
            <div className='flex flex-col justify-center items-center h-[calc(100vh-80px)] w-full'>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/contact" element={<h1>Contact</h1>} />
                    <Route path="/overview/:id" element={<ProductOverviewPage />} />  
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
        </div>
    );
}
