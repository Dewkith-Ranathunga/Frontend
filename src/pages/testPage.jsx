// import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

export default function TestPage() {
    const [image, setImage] = useState(null);

    const url = "https://gracsrqabnkrrlzlktgj.supabase.co"
    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyYWNzcnFhYm5rcnJsemxrdGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNjc2OTMsImV4cCI6MjA2NDk0MzY5M30.9KTipwwOlABbKOMGdUvhkZ5bZUTUYGNhzTTJGrl0fEg"

    const supabase = createClient (url, key);

    function fileUpload() {
        
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
