import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/sideBar/sideBar";
import Router from "./router/router";
import React from 'react'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="position-relative" style={{width:'1420px',height:'835px',backgroundColor:'var(--back-color)'}}>
      <SideBar/>
      <Router/>
    </div>
      
    </BrowserRouter>
  );
}

export default App;