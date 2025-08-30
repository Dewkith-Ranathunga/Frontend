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
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setStatus("success");
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setStatus("error");
        toast.error("Failed to fetch product details. Please try again later.");
      });
  }, []);

  return (
    <>
      {status === "success" && (
        <div className="w-full min-h-screen mt-20 flex">
          {/* Left Side - Image Slider */}
          <div className="w-1/2 flex justify-center items-center bg-amber-300">
            <ImageSlider images={product.images} />
          </div>

          {/* Right Side - Product Details */}
          <div className="w-1/2 flex justify-center items-center bg-blue-300">
            <div className="w-[500px] h-[600px] flex flex-col items-center">
              <h1 className="w-full text-center text-4xl text-secondary font-semibold">
                {product.name}
                {product.altNames.map((altName, index) => {
                  return (
                    <span key={index} className="text-4xl text-gray-600">
                      {" | " + altName}
                    </span>
                  );
                })}
              </h1>

              <h1 className="w-full text-center my-2 text-md text-gray-600 font-semibold">
                {product.productId}
              </h1>

              <p className="w-full text-center my-2 text-md text-gray-600 font-semibold">
                {product.description}
              </p>

              {product.labelledPrice > product.price && (
                <div>
                  <span className="text-4xl mx-4 line-through text-red-500">
                    {product.labelledPrice.toFixed(2)}
                  </span>
                  <span className="text-4xl mx-4 text-green-500">
                    {product.price.toFixed(2)}
                  </span>
                </div>
              )}

              <div className="w-full flex justify-center items-center mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Add to Cart
                </button>
                <button className="bg-gray-500 text-white py-2 px-4 rounded ml-4">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {status === "loading" && <Loading />}
    </>
  );
}
