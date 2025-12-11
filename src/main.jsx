import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AlbumDetail from "./pages/AlbumDetail";
import About from "./pages/About";
import BasketList from "./pages/BasketList";
import CreateOrder from "./pages/CreateOrder.jsx";

import "./index.css";
import { BasketProvider } from "./context/BasketContext.jsx"; 
import App from "./App"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <BrowserRouter>
        <App />  
      </BrowserRouter>
    </BasketProvider>
  </React.StrictMode>
);