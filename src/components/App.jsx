// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Suspense, lazy } from 'react';
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
// import { Navigation } from './Navigation/Navigation';
import { Layout } from './Layout/Layout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Coctails from '../Pages/Coctails';
import Ingridients from '../Pages/Ingridients';
import NonAlcogolics from '../Pages/NonAlcogolics';

import {
  loader as coctalByNameLoader,
  action as coctailByNameAction,
} from '../Pages/Coctails';
import { queryClient } from '../main';

// const Home = lazy(() => import('../Pages/Home'));
// const Coctails = lazy(() => import('../Pages/Coctails'));
// const Ingridients = lazy(() => import('../Pages/Ingridients'));
// const NonAlcogolic = lazy(() => import('../Pages/NonAlcogolic'));
// const OneCoctail = lazy(() => import('../Pages/OneCoctail'));

//1. Не виводяться данні на сторінці OneCoctail;
let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/coctails',
        element: <Coctails />,
        loader: coctalByNameLoader(queryClient),
        action: coctailByNameAction(queryClient),
      },
      {
        path: '/ingridients',
        element: <Ingridients />,
      },
      {
        path: '/non-alcogolics',
        element: <NonAlcogolics />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <>
    //   <Layout>
    //     <Navigation />
    //     <Suspense fallback={<div>Loding...</div>}>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/coctails" element={<Coctails />} />
    //         <Route path="/ingridients" element={<Ingridients />} />
    //         <Route path="/non-alcogolic" element={<NonAlcogolic />} />
    //         <Route path="/coctails/:id" element={<OneCoctail />} />
    //         <Route path="*" element={<Navigate to="/" />} />
    //       </Routes>
    //     </Suspense>
    //   </Layout>
    // </>
  );
}

export default App;
