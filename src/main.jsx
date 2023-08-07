import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import MainLayout from './loyouts/MainLoyout/MainLoyout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Ingridients from './pages/Ingridients';
import NonAlcogolics from './pages/NonAlcogolics';
import Coctails from './pages/Coctails';
import OneCoctail from './Pages/OneCoctail';
//*******************************************
// Зробив нову структуру папок.
// Зробив запит на сторінці Coctails
// Наступні кроки:
// 1. Увʼязати ReactQuery and React router dom на сторінці Coctails;
// 2. Зробити перехід покліку на карточку коктейлю на сторінку OneCocail;
//*******************************************
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/coctails',
        element: <Coctails />,
      },
      {
        path: '/ingridients',
        element: <Ingridients />,
      },
      {
        path: '/non-alcogolics',
        element: <NonAlcogolics />,
      },
      {
        path: '/:id',
        element: <OneCoctail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
