import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

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
   <div className="bg-primary w-full h-full">
        <h1>This is Overview Page for product : {productId}</h1>
   </div>
  );
}


//FFEAEA
//424242
//640D5F