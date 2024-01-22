// PrivateRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import EditBlog from '../pages/EditBlog';
import CreateBlog from '../pages/CreateBlog';

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/create" element={<CreateBlog />} />
      <Route path="*" element={<h1>Private 404 Not Found</h1>} />
    </Routes>
  );
}

export default PrivateRoutes;
