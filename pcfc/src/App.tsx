import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import { AuthContext } from './auth/AuthProvider'; // Assuming you have AuthProvider and AuthContext
import Profile from './User/Profile';
import LandingPage from './Landing';
import Ranking from './User/leaderboard/Ranking.tsx';
import ReduceFootprintPage from './User/ReduceFootPrint';
import AlternativeWaysPage from './Alternativeways.tsx';
import SignupPage from './auth/Signup.tsx';
import LoginPage from './auth/Login.tsx';
import SignOut from './auth/Signout.tsx';

const profileData = {
  name: 'Alice Smith',
  profilePicUrl: '',
  rankData: [
    { label: 'World', value: 823 },
    { label: 'National', value: 25 },
    { label: 'State', value: 3 },
  ],
};

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/results" element={<Ranking />} />
          
          {/* Protect Profile route */}
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile {...profileData} /> : <Navigate to="/" />}
          />
          
          <Route path="/reduce" element={<ReduceFootprintPage />} />
          <Route path="/alternatives" element={<AlternativeWaysPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path = "/ranking" element={<Ranking/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
