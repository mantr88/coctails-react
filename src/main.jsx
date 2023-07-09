import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App';
// import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
// import { Navigation } from './Navigation/Navigation';
import { Layout } from './components/Layout/Layout';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Ingridients from './Pages/Ingridients';
import NonAlcogolics from './Pages/NonAlcogolics';

import {
  loader as coctalByNameLoader,
  action as coctailByNameAction,
} from './Pages/Coctails';
import Coctails from './Pages/Coctails';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
