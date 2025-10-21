import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Lazy loading dos componentes
const Login = lazy(() => import("@/page/Login"));
const Home = lazy(() => import("@/page/home"));
const Dashboard = lazy(() => import("@/page/Dashboard"));
const Vagas = lazy(() => import("@/page/Vagas"));
const Cursos = lazy(() => import("@/page/Cursos"));
const MeuPerfil = lazy(() => import("@/page/MeuPerfil"));
const GeradorCurriculo = lazy(() => import("@/page/GeradorCurriculo"));
const HubWorkDemo = lazy(() => import("@/page/HubWorkDemo"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/vagas"
        element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>}>
            <Vagas />
          </Suspense>
        }
      />
      <Route
        path="/cursos"
        element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>}>
            <Cursos />
          </Suspense>
        }
      />
      <Route
        path="/perfil"
        element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>}>
            <MeuPerfil />
          </Suspense>
        }
      />
      <Route
        path="/gerador-curriculo"
        element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>}>
            <GeradorCurriculo />
          </Suspense>
        }
      />
      <Route
        path="/hubwork"
        element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>}>
            <HubWorkDemo />
          </Suspense>
        }
      />
      {/* Redireciona qualquer rota não encontrada para o login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
