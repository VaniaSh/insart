import React from 'react';
import './app.module.css';
import {CurrencyExchange, Footer, Header} from "./components";
import Test from "./components/Convertor";



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
