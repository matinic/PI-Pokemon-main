import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import { useState } from 'react';

//COMPONENTS
import Nav from './components/nav/Nav.jsx';
import Landing from './components/landing/Landing.jsx';
import Home from './components/home/Home.jsx';
import NewPoke from './components/newPoke/NewPoke.jsx';
import Detail from './components/detail/Detail'


function App() {
  
  const { pathname } = useLocation();

  const paginator = (card) => {
    let pages = [];
    let limitPerPage = 12;
    let j = 1;
    while (card.length) {
      pages[j] = [];
      for (let i = 0; i < limitPerPage; i++) {
        if (!card.length) break;
        pages[j].push(card.shift());
      }
      j++;
    }
    return pages;
  };

  return (
    <div>
      
      { pathname !== '/' ? <Nav/> : null }

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home paginator={paginator}/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/newpoke" element={<NewPoke />}/>
        <Route path="/search" element={<Home paginator={paginator}/>}/>
      </Routes>

    </div>
  );

}

export default App;
