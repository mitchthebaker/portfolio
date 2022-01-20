import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';
import './css/App.css';

const App = () => {
  return (
    <main className='app'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
