import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import MoreOptions from './components/MoreOptions'
import Footer from './components/Footer'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TopCoins from './components/TopCoins';
import MostVisited from './components/MostVisited';
import NewCoins from './components/NewCoins';
import TrendingCoins from './components/TrendingCoins';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MoreOptions /> <TopCoins />
            </>
          }
        />

        <Route
          path="/trending"
          element={
            <>
              <MoreOptions /> <TrendingCoins />
            </>
          }
        />

        <Route
          path="/most-visited"
          element={
            <>
              <MoreOptions /> <MostVisited />
            </>
          }
        />

        <Route
          path="/new"
          element={
            <>
              <MoreOptions /> <NewCoins />
            </>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App
