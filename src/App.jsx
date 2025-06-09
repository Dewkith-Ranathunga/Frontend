import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './pages/adminPage.jsx'
import HomePage from './pages/homePage.jsx'
import LoginPage from './pages/loginPage.jsx'
import SignUpPage from './pages/signUpPage.jsx'
import TestPage from './pages/testPage.jsx'


function App() {

  return (
    <>
      {/* <Header/>
      <ProductCard name="Gaming Laptop" description="High-performance laptop for gamers with latest GPU." price="999.99" imageUrl="https://picsum.photos/id/1/200/300" /> */}

   {/* <div className='w-full h-screen bg-red-100 flex flex-col justify-center items-center'>
      <div className='relative w-[650px] h-[650px] bg-red-900 flex flex-col justify-center items-center'>
        <div className='w-[600px] h-[600px] bg-green-500 flex flex-col justify-center items-center'>
          <div className="w-[100px] h-[100px] bg-blue-500 absolute bottom-[0px] right-[0px] "></div>
          <div className="w-[100px] h-[100px] bg-blue-300"></div>
          <div className="w-[100px] h-[100px] bg-teal-500"></div>
          <div className="w-[100px] h-[100px] bg-blue-900"></div>
        </div>
      </div> 
    </div>  */}

    {/* <LoginPage/> */}

    <BrowserRouter>
      <div>
        <Toaster position='top-center'/> 
        {/* <Header/> */}
        <Routes path="/*">
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/testing" element={<TestPage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          
          <Route path="/*" element={<h1>404 Not found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>


    </>
  )
}

export default App

//https://gracsrqabnkrrlzlktgj.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyYWNzcnFhYm5rcnJsemxrdGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNjc2OTMsImV4cCI6MjA2NDk0MzY5M30.9KTipwwOlABbKOMGdUvhkZ5bZUTUYGNhzTTJGrl0fEg