import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/overview/${product.productId}`} className="w-[300px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden m-4 flex flex-col">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>

        {/* Alt Names */}
        {product.altNames && product.altNames.length > 0 && (
          <p className="text-sm text-gray-500 italic truncate">
            Also known as: {product.altNames.join(", ")}
          </p>
        )}

        {/* Description */}
        <p className="mt-2 text-gray-600 flex-grow overflow-hidden">
          {product.description}
        </p>

        {/* Prices */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          {product.labelledPrice > product.price && (
            <span className="text-sm line-through text-gray-400">
              ${product.labelledPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock & Availability */}
        <p className={`mt-2 font-medium ${
          product.isAvailable && product.stock > 0 ? "text-green-600" : "text-red-600"
        }`}>
          {product.isAvailable && product.stock > 0
            ? `In stock: ${product.stock}`
            : "Out of stock"}
        </p>
      </div>
    </Link>
  );
}
