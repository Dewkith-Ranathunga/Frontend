import { useState } from 'react';

export default function TestPage() {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("Passed");

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-10'>
            {/* Counter Section */}
            <div className='w-[450px] h-[250px] shadow flex justify-center items-center'>
                <button
                    onClick={() => setCount(count - 1)}
                    className='bg-blue-600 text-white font-bold w-[100px] h-[40px] text-[20px] cursor-pointer'
                >
                    -
                </button>
                
                <span className='text-[40px] font-bold text-center w-[100px] mx-[20px] flex justify-center items-center'>
                    {count}
                </span>
                
                <button
                    onClick={() => setCount(count + 1)}
                    className='bg-blue-600 text-white font-bold w-[100px] h-[40px] text-[20px] cursor-pointer'
                >
                    +
                </button>
            </div>

            {/* Status Section */}
            <div className='w-[450px] h-[250px] shadow flex flex-col justify-center items-center gap-4'>
                <div className="text-[30px] font-bold">Status: {status}</div>

                <div className="flex gap-5">
                    <button
                        onClick={() => setStatus("Failed")}
                        className='bg-red-600 text-white font-bold w-[120px] h-[40px] text-[20px] cursor-pointer'
                    >
                        Fail
                    </button>

                    <button
                        onClick={() => setStatus("Passed")}
                        className='bg-green-600 text-white font-bold w-[120px] h-[40px] text-[20px] cursor-pointer'
                    >
                        Pass
                    </button>
                </div>
            </div>
        </div>
    );
}
