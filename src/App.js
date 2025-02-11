import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Homepage/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;