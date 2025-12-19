import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AlbumDetail from "./pages/AlbumDetail";
import About from "./pages/About";
import BasketList from "./pages/BasketList";
import CreateOrder from "./pages/CreateOrder";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";

import { AuthProvider } from "./context/AuthContext";
import { BasketProvider } from "./context/BasketContext";


import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BasketProvider>
        <BrowserRouter>
          <Routes>
            {/* Страница с хедером и футером  */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />                 
              <Route path="album/:id" element={<AlbumDetail />} /> 
              <Route path="about" element={<About />} />        
              <Route path="basket" element={<BasketList />} />   
              <Route path="order" element={<CreateOrder />} />    
            <Route path="contacts" element={<Contacts />} />
             </Route>

            {/* Страницы авторизации  */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </BasketProvider>
    </AuthProvider>
  </React.StrictMode>
);