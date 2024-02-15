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
import ReviewRegistration from '../pages/ReviewRegistration';
import MapPage from '../pages/Map';
import ProfileChange from '../pages/ProfileChange';
import MyPage from '../pages/MyPage';
import Point from '../pages/Point';

const Router = () => {
  const { user } = useAuth();
  if (user === undefined) return null;
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
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/profileChange" element={<ProfileChange />} />
            <Route path="/Point" element={<Point />} />
            <Route
              path="/review-registration"
              element={<ReviewRegistration />}
            />
            <Route path="/map" element={<MapPage />} />
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
