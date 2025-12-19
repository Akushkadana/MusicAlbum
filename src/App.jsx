import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AlbumDetail from "./pages/AlbumDetail";
import About from "./pages/About";
import BasketList from "./pages/BasketList";
import CreateOrder from "./pages/CreateOrder.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="album/:id" element={<AlbumDetail />} />
        <Route path="about" element={<About />} />
        <Route path="basket" element={<BasketList />} />
        <Route path="order" element={<CreateOrder />} />
      </Route>
    </Routes>
  );
}