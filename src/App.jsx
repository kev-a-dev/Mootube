import './App.css';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={'asdf'}/>
    </Routes>
    </>
  );
}

export default App;
