import './App.css';
import LandingPage from './Components';
import CatNav from './Components/CatNav';
import MainComponent from './Components/MainComponent';
import TopNav from './Components/TopNav';
import ProductDetails from './Components/ProductDetails';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
        <TopNav/>
        <CatNav/>
        <Routes>
            <Route path='/' Component={LandingPage}></Route>
            <Route path='/product-details' Component={ProductDetails}></Route>
            <Route path='/cart' Component={Cart}></Route>
        </Routes>
    </div>
  );
}

export default App;
