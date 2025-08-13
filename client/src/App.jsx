import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./Pages/Home/Home";
import BlogPage from "./Pages/Blogs/Blog";
import BlogDetailPage from "./Pages/Blogs/BlogDetail";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminPanel from "./Pages/Admin/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import Hakkımızda from "./Pages/Hakkımızda/Hakkımızda";

import Projeler from "./Pages/Projeler/Projeler";
import ProjeDetay from "./Pages/Projeler/ProjeDetay";
import Etkinlikler2024_2025 from "./Pages/Etkinliklerimiz/Etkinlikler2024_2025/Etkinlikler2024_2025";

import Iletisim from "./Pages/Contact/Contact";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const queryClient = new QueryClient();

// 404 Sayfası Komponenti
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #002477 0%, #030018 50%, #2c3955 100%)",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Navbar />
      <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>404</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Sayfa Bulunamadı
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.8 }}>
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <a
        href="/"
        style={{
          padding: "15px 30px",
          background: "linear-gradient(135deg, #7e96ff 0%, #2d2f7d 100%)",
          color: "white",
          textDecoration: "none",
          borderRadius: "25px",
          fontWeight: "600",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 10px 25px rgba(126, 150, 255, 0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
        }}
      >
        Ana Sayfaya Dön
      </a>
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />

            {/* Ana Sayfa */}
            <Route path="/" element={<Home />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />

            {/* Projeler Routes */}
            <Route path="/projeler" element={<Projeler />} />
            <Route path="/proje/:id" element={<ProjeDetay />} />

            <Route
              path="/etkinliklerimiz/2024-2025"
              element={<Etkinlikler2024_2025 />}
            />
            <Route path="/hakkımızda" element={<Hakkımızda />} />

            <Route path="/iletisim" element={<Iletisim />} />

            {/* 404 Route - En sonda olmalı */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
