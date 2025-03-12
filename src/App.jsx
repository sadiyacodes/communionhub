import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/Events";

function App() {
  

  return (
    <BrowserRouter>
       <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
