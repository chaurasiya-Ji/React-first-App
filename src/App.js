import {Navbar,Home,About,Footer,Contect} from './Components/Allfiles.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <div>
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/home" element= {<Home />}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/contect" element= {<Contect/>}/>
        </Routes>
      </BrowserRouter>
      </div>
 
        <Footer/>
    </>
    
      
     );
}

export default App;
