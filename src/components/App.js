
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Itemlist from "./Itemlist";
import Itemdetails from "./Itemdetails";

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Itemlist />} />
          <Route path="/items/:id" element={<Itemdetails />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
