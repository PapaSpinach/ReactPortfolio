import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './routes/Root';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';
import Resume from './routes/Resume';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: '/', element: <About />},
      {path: '/portfolio', element: <Portfolio />},
      {path: '/contact', element: <Contact />},
      {path: '/resume', element: <Resume />},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
