import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/common/header';
import Home from './pages/landing.js';
import About from './pages/about.js';
import Courses from './pages/courses.js';

import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';

import Pricing from './pages/pricing.js';
import Checkout from './pages/checkout.js';



function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>


        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/checkout" element={<Checkout/>}/>

      </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
