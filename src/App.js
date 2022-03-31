import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Foods from './Pages/Foods/Foods';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navigation></Navigation>
  <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/foods' element={<Foods></Foods>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
