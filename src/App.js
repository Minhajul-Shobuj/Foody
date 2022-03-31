import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import NotFound from './Components/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Foods from './Pages/Foods/Foods';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navigation></Navigation>
  <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
