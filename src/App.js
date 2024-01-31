import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Help from './Components/Help'


function App() {
  return (
    <div >
    <Router>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Cart'} element={<Cart/>}/>
        <Route path={'/Help'} element={<Help/>}/>
      </Routes>
      </Router>  
    
    </div>
  );
}

export default App;
