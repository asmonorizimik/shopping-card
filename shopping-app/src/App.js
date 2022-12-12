import {Link, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div>
      <div className='links'>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/Card">Card</Link></button>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Card" element={<Card/>}/>
      </Routes> 

    </div>
  );
}

export default App;
