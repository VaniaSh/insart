import React from 'react';
import styles from './index.module.css';
import {CurrencyExchange, Footer, Header, Convertor} from "./components";




function App() {
  return (
      <div className={styles.wrapper}>
          <Header/>
          <CurrencyExchange/>
          <Convertor/>
          <Footer/>
      </div>


);
}

export default App;
