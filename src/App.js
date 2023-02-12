import React from 'react';
import Header from './components/common/header/Header';
import Navbar  from './components/common/navbar/Navbar';
import Footer  from './components/common/footer/Footer';
import TitlePage from './components/common/titlePage/TitlePage';

import './App.css';


function App () {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <TitlePage/>
      <Footer/>
    </div>



  )
}

export default App;