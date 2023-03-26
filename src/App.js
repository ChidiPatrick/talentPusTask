import './App.scss'
import Header from './components/headerComponent/header'
import Brands from './components/brandsComponents/brands'
import ProductDescription from './components/productDescription/productDescription'
function App () {
  return (
    <div className='App'>
      <Header />
      <Brands />
      <ProductDescription />
    </div>
  )
}

export default App
