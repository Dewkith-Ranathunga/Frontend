import { Link, Route, Routes } from 'react-router-dom';
import AdminProductsPage from './admin/adminProductsPage.jsx';



export default function AdminPage() {
    return (
        <div className='w-full h-screen  flex '>
            <div className='h-full w-[300px] bg-blue-900 flex flex-col '>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/reviews">Reviews</Link>
            </div>

            <div className='h-full w-[calc(100%-300px)] '>
               <Routes path='/*'>  
                 <Route path='/products' element={<AdminProductsPage/>}></Route>
               </Routes> 
            </div>
        </div>
    )
}