import React from 'react';
import './App.css';
import {CurrencyExchange, Footer, Header} from "./components";
import Test from "./components/Test";



function App() {
  return (
      <div className={'wrapper'}>
          <Header/>
          <CurrencyExchange/>
          <Test/>
          <Footer/>
      </div>


);
}

export default App;
