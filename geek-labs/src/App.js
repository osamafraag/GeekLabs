import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/sideBar/sideBar";
import Router from "./router/router";
import React from 'react'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Router/>
    </BrowserRouter>
  );
}

export default App;