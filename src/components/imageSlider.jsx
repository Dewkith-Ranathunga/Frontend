export default function ImageSlider(props) {
  const images = props.images;

  return (
    <div className="w-full h-64 overflow-hidden relative">
      {images && images.length > 0 ? (
        <img
          src={images[0]}
          alt="Product"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}
    </div>
  );
}