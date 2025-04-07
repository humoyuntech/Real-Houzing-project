import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from '../pages/Home'
import Properties from '../pages/Properties'
import navbar from '../utils/navbar.jsx'
import Navbar from '../components/Navbar'



function Root() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map(({ path, element, id }) => {
              return <Route key={id} path={path} element={element} />;
            })}
          </Route>
            <Route path="/" element={<Navigate to={'/home'} />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />

        </Routes>
    </BrowserRouter>
  )
}

export default Root