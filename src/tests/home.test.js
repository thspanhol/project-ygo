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

/* import { render, screen } from "@testing-library/react"
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
            <App />
        )

        expect(screen.getByText("BlackWing")).toBeInTheDocument();
    })
}) */

/* import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Outlet, Route, Router, Routes, Navigate } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="layout">
            <Outlet />
        </div>
    );
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/sign-in" element={<p data-testid="login-wrapper" />} />
            </Route>

            <Route index element={<Navigate to="/sign-in" />} />
        </Routes>
    );
};

describe('Routes', () => {
    it('Redirects to Login if not logged in', async () => {
        const history = createMemoryHistory();
        expect(history.location.pathname).toEqual('/');

        // history.push('/sign-in');
        render(
            <Router location={history.location} navigator={history}>
                <AppRoutes />
            </Router>
        );
        expect(history.location.pathname).toEqual('/sign-in');

        await waitFor(() => {
            screen.getByTestId('login-wrapper');
        });
    });
}); */

/* import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";

import { AppProvider } from "../context/AppContext"

import routesConfig from "../routes/Routes";


describe("teste", () => {
  it("testando", async () => {
    const router = createMemoryRouter(routesConfig, { initialEntries: ["/"], });
      render(
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      )

      expect(screen.getByText("BlackWing")).toBeInTheDocument();
  })
}); */

import { RouterProvider, MemoryRouter, Routes, Route } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";

import { AppProvider } from "../context/AppContext"

import routesConfig from "../routes/Routes";

import { App } from "../App"
import { Login } from "../routes/Login"
import { Search } from "../routes/Search"
import { Card } from "../routes/Card"

import { Navigate } from "react-router-dom";


describe("teste", () => {
  it("testando", async () => {
      render(
        <AppProvider>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route element={<App />}>
                <Route path="/" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="/card" element={<Card />} />
                <Route path="*" element={<Navigate to='/' />} />
             </Route>
            </Routes>
          </MemoryRouter>
        </AppProvider>
      )

      expect(screen.getByText("BlackWing")).toBeInTheDocument();
  })
});