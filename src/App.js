import {Navbar,Home,About,Footer} from './Components/Allfiles.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/home" element= {<Home />}/>
          <Route path="/about" element= {<About/>}/>
        </Routes>
        <Navbar/>
      </BrowserRouter>
      </div>
        <Footer/>
    </>
    
      
     );
}

export default App;
