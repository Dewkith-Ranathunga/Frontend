import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/imageSlider.jsx"; // Assuming you have an ImageSlider component to display images

export default function ProductOverviewPage() {
    const params = useParams();  // useParams is a hook that returns an object of key/value pairs of URL parameters
    const productId = params.id; // Extracting the product ID from the URL parameters
    const [status, setStatus] = useState("loading"); //loading,success,error
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
    { status == "success" && (
    <div className="w-full h-full flex">
         <div className="w-[50%] h-full bg-amber-300">
                <ImageSlider images={product.images} />
        </div>
            
         <div className="w-[50%] h-full bg-blue-300">
        </div>
    </div>
    )}
   </>
  );
}


//FFEAEA
//424242
//640D5F