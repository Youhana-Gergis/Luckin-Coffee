import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetStore from './pages/GetStore';
import Product from './pages/Product';
import About from './pages/About';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/getStore' exact Component={GetStore}/>
        <Route path='/product' exact Component={Product}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
