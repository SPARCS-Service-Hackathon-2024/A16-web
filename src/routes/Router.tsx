import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from '../pages/Splash';
import Login from '../pages/Login';
import JoinWay from '../pages/JoinWay';
import Join from '../pages/Join';
import Home from '../pages/Home';
import Alarm from '../pages/Alarm';
import SearchPerson from '../pages/SearchPerson';
import SearchPlace from '../pages/SearchPlace';
import Store from '../pages/Store';
import Videos from '../pages/Videos';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/JoinWay" element={<JoinWay />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Alarm" element={<Alarm />} />
        <Route path="/SearchPerson" element={<SearchPerson />} />
        <Route path="/SearchPlace" element={<SearchPlace />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
