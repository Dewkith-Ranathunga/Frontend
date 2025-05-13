import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {

  return (
    <>
      <Header/>
      <ProductCard name="Gaming Laptop" description="High-performance laptop for gamers with latest GPU." price="999.99" imageUrl="https://picsum.photos/id/1/200/300" />


    </>
  )
}

export default App
