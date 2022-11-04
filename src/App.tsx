import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className='App bg-gray-900  min-h-[100vh] flex justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
