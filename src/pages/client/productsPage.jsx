import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard.jsx";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product")
                .then((res) => {
                    setProducts(res.data);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    return (
        <div className="w-full h-full bg-green-50 flex flex-wrap justify-center items-center ">
            {
            products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
            }
        </div>
    );
}
