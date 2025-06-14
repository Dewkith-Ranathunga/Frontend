import { useState } from 'react';
import mediaUpload from '../utils/mediaUpload';

export default function TestPage() {
    const [image, setImage] = useState(null);

    function fileUpload() {
        mediaUpload(image)
            .then((url) => {
                console.log("File uploaded successfully:", url);
                alert("File uploaded successfully: " + url);
            })
            .catch((error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file: " + error);
            });
    }

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-10 bg-gray-100'>
            <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={(e) => setImage(e.target.files[0])}
            />

            <button
                onClick={fileUpload}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 ease-in-out"
            >
                Upload
            </button>
        </div>
    );
}
