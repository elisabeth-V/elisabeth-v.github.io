import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import ContentPage from './components/content/content';
import ControlPanel from './components/homepage/homepage';
import Converter from './components/converter/converter';
import { Footer,SubFooter } from './components/footer/footer';
import { Wrapper }from './app-styled'
import { MyLabels } from './components/data/labels-const';
import './App.scss';


const App = () => {

  return (
      <>
        <Header />
        
        <Wrapper className="innerWrp">
          <Routes>
            <Route index element={<Converter errorMessage={MyLabels.errorMessage} loadingMessage={MyLabels.loadingMessage}/>} />
            <Route path='/content-page' element={<ContentPage subTitle={MyLabels.subTitle} errorMessage={MyLabels.errorMessage} loadingMessage={MyLabels.loadingMessage}/>} />
            <Route path='/contact' element={<Contact overallMessage={MyLabels.overallMessage}/>} />
            <Route path='/control-panel' element={<ControlPanel />} />
          </Routes>
        </Wrapper>

        <div className="footerSection">
          <Footer/>
          <SubFooter/>
        </div>
      </>
  );
}

export default App;
