import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/index';
import './App.css';
import './index.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<div className='h-screen w-screen flex justify-center items-center text-xl font-bold bg-gray-600 text-white'>404 PAGE NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
