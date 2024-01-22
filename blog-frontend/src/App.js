// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../../blog-frontend/src/pages/Home';
import Music from '../../blog-frontend/src/pages/Music';
import Technology from '../../blog-frontend/src/pages/Technology';
import BlogDetails from '../../blog-frontend/src/pages/BlogDetails';
import Login from '../../blog-frontend/src/pages/Login';
import SignUp from '../../blog-frontend/src/pages/SignUp';
import Education from '../../blog-frontend/src/pages/Education';
import { AuthContextProvider } from '../../blog-frontend/src/context/AuthContext';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <div className="container mx-auto">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/music" element={<Music />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route element={<PrivateRoutes />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
