/* import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { App } from "../App"
import { Login } from "../routes/Login"
import "@testing-library/jest-dom"
import { AppProvider } from "../context/AppContext"

describe("teste", () => {
    it("testando", () => {
        render(
            <AppProvider>
              <BrowserRouter>
            <Login />
            </BrowserRouter>  
            </AppProvider>
            
        )

        expect(screen.getByText("BlackWing")).toBeInTheDocument();
    })
})

 */

import { render, screen } from "@testing-library/react"
import { App } from "../App"
import { Login } from "../routes/Login"
import { Search } from "../routes/Search"
import { Card } from "../routes/Card"
import "@testing-library/jest-dom"
import { AppProvider } from "../context/AppContext"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
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

describe("teste", () => {
    it("testando", () => {
        render(
            <AppProvider>
              <RouterProvider router={router} />
            </AppProvider>  
        )

        expect(screen.getByText("BlackWing")).toBeInTheDocument();
    })
})