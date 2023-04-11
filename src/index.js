import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./routes/Login";
import Search from "./routes/Search";
import Card from "./routes/Card";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createHashRouter,
} from "react-router-dom";
import { AppProvider } from "./context/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/search", element: <Search mockCardList="" /> },
      { path: "/card", element: <Card /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const routerHash = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/search", element: <Search mockCardList="" /> },
      { path: "/card", element: <Card /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routerHash} />
    </AppProvider>
  </React.StrictMode>
);
