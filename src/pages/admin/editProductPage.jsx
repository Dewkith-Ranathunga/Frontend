import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";

export default function EditProductPage() {
	const [productId, setProductId] = useState("");
	const [name, setName] = useState("");
	const [altNames, setAltNames] = useState("");
	const [description, setDescription] = useState("");
	const [images, setImages] = useState([]);
	const [labelledPrice, setLabelledPrice] = useState(0);
	const [price, setPrice] = useState(0);
	const [stock, setStock] = useState(0);
	const navigate = useNavigate();

	async function UpdateProduct() {
		const token = localStorage.getItem("token");
		if (token == null) {
			toast.error("Please login first");
			return;
		}

		if (images.length <= 0) {
			toast.error("Please select at least one image");
			return;
		}

		const promiseArray = [];
		for (let i = 0; i < images.length; i++) {
			promiseArray[i] = mediaUpload(images[i]);
		}

		try {
			const imageUrls = await Promise.all(promiseArray);
			const altNamesArray = altNames.split(",").map(name => name.trim());

			const product = {
				productId: productId,
				name: name,
				altNames: altNamesArray,
				description: description,
				images: imageUrls,
				labelledPrice: Number(labelledPrice),
				price: Number(price),
				stock: Number(stock),
			};

			axios
				.post(import.meta.env.VITE_BACKEND_URL + "/api/product", product, {
					headers: {
						Authorization: "Bearer " + token,
					},
				})
				.then(() => {
					toast.success("Product added successfully");
					navigate("/admin/products");
				})
				.catch((e) => {
					toast.error(e.response?.data?.message || "Failed to add product");
				});
		} catch (e) {
			console.log("Image upload failed:", e);
			toast.error("Image upload failed");
		}
	}

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
			<input
				type="text"
				placeholder="Product ID"
				className="input input-bordered w-full max-w-xs"
				value={productId}
				onChange={(e) => setProductId(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Name"
				className="input input-bordered w-full max-w-xs"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Alt Names"
				className="input input-bordered w-full max-w-xs"
				value={altNames}
				onChange={(e) => setAltNames(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Description"
				className="input input-bordered w-full max-w-xs"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<input
				type="file"
				placeholder="Images"
				multiple
				className="input input-bordered w-full max-w-xs"
				onChange={(e) => setImages(e.target.files)}
			/>
			<input
				type="number"
				placeholder="Labelled Price"
				className="input input-bordered w-full max-w-xs"
				value={labelledPrice}
				onChange={(e) => setLabelledPrice(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Price"
				className="input input-bordered w-full max-w-xs"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Stock"
				className="input input-bordered w-full max-w-xs"
				value={stock}
				onChange={(e) => setStock(e.target.value)}
			/>
			<div className="w-full flex justify-center flex-row items-center mt-4">
				<Link
					to="/admin/products"
					className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-4"
				>
					Cancel
				</Link>
				<button
					className="bg-green-500 text-white font-bold py-2 px-4 rounded"
					onClick={UpdateProduct}
				>
					Update Product
				</button>
			</div>
		</div>
	);
}
