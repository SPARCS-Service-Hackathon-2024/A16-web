import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./tailwind.css";
import Splash from './pages/Splash';
import Login from './pages/Login';
import JoinWay from './pages/JoinWay';
import Join from './pages/Join';
import Home from './pages/Home';
import Alarm from './pages/Alarm';
import SearchPerson from './pages/SearchPerson';
import SearchPlace from './pages/SearchPlace';
import Store from './pages/Store';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/JoinWay' element={<JoinWay/>}/>
        <Route path='/Join' element={<Join/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Alarm' element={<Alarm/>}/>
        <Route path='/SearchPerson' element={<SearchPerson/>}/>
        <Route path='/SearchPlace' element={<SearchPlace/>}/>
        <Route path='/Store' element={<Store/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;