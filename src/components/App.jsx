// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Suspense, lazy } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../Pages/Home'));
const Coctails = lazy(() => import('../Pages/Coctails'));
const Ingridients = lazy(() => import('../Pages/Ingridients'));
const NonAlcogolic = lazy(() => import('../Pages/NonAlcogolic'));

//1. після додавання react-query не йде запит;

function App() {
  return (
    <>
      <Layout>
        <Navigation />
        <Suspense fallback={<div>Loding...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coctails" element={<Coctails />} />
            <Route path="/ingridients" element={<Ingridients />} />
            <Route path="/non-alcogolic" element={<NonAlcogolic />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
