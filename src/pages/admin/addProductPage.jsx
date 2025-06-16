export default function AddProductPage() {
    return(
        <div className='w-full h-screen flex flex-col justify-center items-center gap-10 bg-gray-100'>
            <h1 className="text-2xl font-bold mb-4">Add Product Page</h1>
            <p className="text-lg">This is the Add Product Page. You can add new products here.</p>
            <button
                className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 ease-in-out"
            >
                Add Product
            </button>
        </div>
    )
}