import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'

//COMPONENTS
  import Nav from './components/nav/Nav.jsx';
  import Landing from './components/landing/Landing.jsx';
  import Home from './components/home/Home.jsx';
  import NewPoke from './components/newPoke/NewPoke.jsx';
  import Detail from './components/detail/Detail'

import { useState } from 'react';
 

function App() {
  
   const { pathname } = useLocation();
    const [search,setSearch] = useState(false)

  return (
    <div>
      
      {
        pathname !== '/' ? <Nav setSearch = {setSearch} search={search}/> : null
      }

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home search={search} setSearch={setSearch}/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/newpoke" element={<NewPoke />}/>
      </Routes>
    </div>
  );
}

export default App;
