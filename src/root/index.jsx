import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
function Root() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/properties" element={<h1>Properties</h1>} />
            <Route path="/" element={<Navigate to={'/home'} />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root