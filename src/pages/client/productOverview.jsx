import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/imageSlider.jsx";
import Loading from "../../components/loading.jsx";

export default function ProductOverviewPage() {
    const params = useParams();  
    const productId = params.id; 
    const [status, setStatus] = useState("loading"); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
       axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/${productId}`)
           .then(response => {
               console.log(response.data);
               setProduct(response.data);
               setStatus("success");
           })
           .catch(error => {
               console.error("Error fetching product data:", error);
               setStatus("error");
               toast.error("Failed to fetch product details. Please try again later.");
           });
    }, []);

  return (
    <>
      {status === "success" && (
        <div className="w-full h-screen flex">
          {/* Left 50% with ImageSlider */}
          <div className="w-1/2 h-full bg-amber-300 flex justify-center items-center">
            <ImageSlider images={product.images} />
          </div>

          {/* Right 50% for product details */}
          <div className="w-1/2 h-full bg-blue-300 flex justify-center items-center">
            {/* Product details go here */}
          </div>
        </div>
      )}

      {status === "loading" && <Loading />}
    </>
  );
}
