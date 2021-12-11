import React from 'react'
import './App.css';

import OrderForm from './components/form';

import Product  from './components/product';

import Footer  from './components/footer';


function App() {
  return (
    <div className="container py-3">
      <div className="row">
        <Product/>
        <OrderForm/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
