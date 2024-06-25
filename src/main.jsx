import ReactDom from "react-dom/client";
import React from "react";
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function Main(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< App />} />
            
          </Routes>
        </BrowserRouter>
      );

}


ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
