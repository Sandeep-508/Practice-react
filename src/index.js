import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Error404 from './pages/Error404'
import Blogs from './pages/Blogs';
import Timer from './components/Timer';
import Question from './components/Questions';
import FormValidation from './components/FormValidation';
import CurdOperations from './components/CurdOperations';

const root = ReactDOM.createRoot(document.getElementById('root'));
let Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <ContactUs />
    },
    {
      path: "/blog",
      element: <Blog />
    },
    {
      path: "*",
      element: <Error404 />
    },
    {
      path: "/blogs/:id",
      element: <Blogs />
    },
    {
      path: "/timer",
      element: <Timer />
    },
    {
      path: "/question",
      element: <Question />
    },
    {
      path: "/form",
      element: <FormValidation />
    },
    {
      path: "/curd",
      element: <CurdOperations />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);
reportWebVitals();
