import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [orderData, setOrderData] = useState({});

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:movieID" element={<SessionsPage />} />
        <Route path="/assentos/:sessionID" element={<SeatsPage setOrderData={setOrderData }/>} />
        <Route path="/sucesso" element={<SuccessPage orderData={orderData} />} />
      </Routes>
    </BrowserRouter>
  );
}
