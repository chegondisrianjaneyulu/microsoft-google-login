import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/homePage';

function ProtectedRoutes() {
  return (
    <Routes>
        <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}

export default ProtectedRoutes