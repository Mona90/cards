import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Cart from './pages/cart/Cart';
import Cards from './pages/SavedCards';
import { createContext, useState } from 'react';
export const dataContext = createContext([]);

function App() {
  const [data, setData] =  useState([])
  return (
    <>
        <dataContext.Provider value={{data, setData}}>
          <Routes>
              <Route index  path="/"  element={<Home/>}/>
              <Route path="saved-Cards" element={<Cards/>}/>
          </Routes>
        </dataContext.Provider>
    </>

  );
}

export default App;


