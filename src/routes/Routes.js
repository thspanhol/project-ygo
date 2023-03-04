import Login from "./Login"
import Search from './Search';
import Card from './Card';
import App from "../App"

import { Navigate } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';

const routesConfig = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/search", element: <Search /> },
        { path: "/card", element: <Card /> },
        { path: "*", element: <Navigate to='/' /> },
      ],
    },
  ]);

  export default routesConfig;