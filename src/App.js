import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Header  from './components/header/Header';
import { Footer, SubFooter } from './components/footer/Footer';
import ListingImages from './components/listing-images/list-images';
import MoreAbout from './components/more-about/more-about';
import './App.scss';

const App = () => {
  
  const subTitle = 'SPA displaying images coming from the Typicode API'
  
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path='' element={<ListingImages subTitle={subTitle} />} />
          <Route path='/more-about' element={<MoreAbout subTitle={subTitle} />} />
        </Routes>
      </div>
      <div className="footerSection">
        <Footer/>
        <SubFooter/>
      </div>

    </BrowserRouter>
  );
}

export default App;
