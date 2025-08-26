export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-transparent border-t-accent animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-transparent border-r-accent animate-spin"></div>
      </div>
    </div>
  );
}
