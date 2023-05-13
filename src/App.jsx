import { Routes, Route } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from './components/Navbar';
import Home from './pages/home'
import Dashboard from'./pages/dashboard'
import Form from'./pages/form'
import React from 'react'

export default function App() {
  return (
    <div >
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </Container>
    </div>
  )
}
