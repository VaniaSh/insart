import React from 'react';
import './App.css';
import {Table} from "react-bootstrap";
import {CurrencyExchange, Footer, Header} from "./components";



function App() {
  return (
      <div className={'wrapper'}>
          <Header/>
          <CurrencyExchange/>
          <Footer/>
      </div>


);
}

export default App;
