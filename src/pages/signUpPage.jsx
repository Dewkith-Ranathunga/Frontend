export default function SigUpPage() {
    return (
        <div className='w-full h-screen bg-red-100 flex flex-col justify-center items-center'>
            <div className='relative w-[650px] h-[650px] bg-red-900 flex flex-col justify-center items-center'>
                <div className='w-[600px] h-[600px] bg-green-500 flex flex-col justify-center items-center'>
                    <h1 className="text-[30px] font-bold text-blue-700">Sign Up</h1>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Username" className="p-2 border border-gray-300 rounded" />
                        <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
                        <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}