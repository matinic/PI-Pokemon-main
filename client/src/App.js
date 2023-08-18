import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'

//COMPONENTS
  import Nav from './components/nav/Nav.jsx';
  import Landing from './components/landing/Landing.jsx';
  import Home from './components/home/Home.jsx';
  import NewPoke from './components/newPoke/NewPoke.jsx';
  import DetailById from './components/detailById/DetailById'
  import DetailByName from './components/detailByName/DetailByName'
import { useState } from 'react';
 

function App() {
   const { pathname } = useLocation();
    const [search,setSearch] = useState(false)

    const onSearch = (state)=>{
      setSearch(state)
    }

    console.log('APP')
  return (
    <div>
      
      {
        pathname !== '/' ? <Nav onSearch = {onSearch}/> : null
      }

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home search={search} onSearch={onSearch}/>}/>
        <Route path="/detail/:id" element={<DetailById />}/>
        <Route path="/detail/name/:name" element={<DetailByName />}/>
        <Route path="/newpoke" element={<NewPoke/>}/>
      </Routes>
    </div>
  );
}

export default App;
