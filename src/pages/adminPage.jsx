import { Link, Route, Routes } from 'react-router-dom';

export default function AdminPage() {
    return (
        <div className='w-full h-screen bg-red-900 flex '>
            <div className='h-full w-[300px] bg-blue-900 flex flex-col '>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/reviews">Reviews</Link>
            </div>

            <div className='h-full w-[calc(100%-300px)] bg-amber-400 '>
               <Routes path='/*'>  
                 <Route path='/products' element={<h1>Products</h1>}></Route>
               </Routes> 
            </div>
        </div>
    )
}