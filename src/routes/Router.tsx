import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import JoinWay from '../pages/JoinWay';
import Join from '../pages/Join';
import Home from '../pages/Home';
import Alarm from '../pages/Alarm';
import SearchPerson from '../pages/SearchPerson';
import SearchPlace from '../pages/SearchPlace';
import Store from '../pages/Store';
import Videos from '../pages/Videos';
import Setting from '../pages/Setting';
import { useAuth } from '../api/auth';

const Router = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/Alarm" element={<Alarm />} />
            <Route path="/SearchPerson" element={<SearchPerson />} />
            <Route path="/SearchPlace" element={<SearchPlace />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/join-way" element={<JoinWay />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
