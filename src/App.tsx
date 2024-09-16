import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import { Footer, SubFooter } from './components/footer/footer';
import Contact from './components/contact/contact';
import ContentPage from './components/content/content';
import Homepage from './components/homepage/homepage';
import Converter from './components/converter/converter';
import { Wrapper }from './app-styled'
import { MyLabels } from './components/data/labels-const';
import './App.scss';

const App = () => {

  return (
      <>
        <Header />
        
        <Wrapper className="innerWrp">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/currency-converter' element={<Converter errorMessage={MyLabels.errorMessage} loadingMessage={MyLabels.loadingMessage} copyApiCurrency={MyLabels.copyApiCurrency}/>} />
            <Route path='/content-page' element={<ContentPage copyApiImg={MyLabels.copyApiImg} errorMessage={MyLabels.errorMessage} loadingMessage={MyLabels.loadingMessage}/>} />
            <Route path='/contact' element={<Contact overallMessage={MyLabels.overallMessage}/>} />
          </Routes>
        </Wrapper>

        <div className="footerSection">
          <Footer overallMessage={MyLabels.overallMessage}/>
          <SubFooter copyrightMessage={MyLabels.copyrightMessage}/>
        </div>
      </>
  );
}

export default App;
