import { RouterProvider, createMemoryRouter } from "react-router-dom";
import * as React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App"
import Login  from "../routes/Login"
import Search from "../routes/Search"
import Card from "../routes/Card"
import { Navigate } from "react-router-dom";
import { AppProvider } from '../context/AppContext';

const routes = [
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
];

const router = createMemoryRouter(routes, { initialEntries: ["/"] });

const renderApp = <AppProvider><RouterProvider router={router} /></AppProvider>;

describe("Testes da tela Home", () => {
  test("Verifica se a tela contém todos os títulos", async () => {
    render(renderApp);
    
    await waitFor(() => screen.findAllByRole("heading"));
    expect(screen.getByText("BlackWing")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("Searching for all cards of the")).toBeInTheDocument();
    expect(screen.getByText("blackwing archetype.")).toBeInTheDocument();
  });

  test("Verifica se a tela contém o link para a página search", async () => {
    render(renderApp);
    
    await waitFor(() => screen.findAllByRole("heading"));
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("Verifica se a tela renderiza a imagem", async () => {
    render(renderApp);
    
    await waitFor(() => screen.findAllByRole("heading"));
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

/* describe("delay", () => {
  test("timer", async () => {
    render(renderApp);

    await waitFor(() => {
      setTimeout(() => {
        fireEvent.click(screen.getByText("Search"));
      }, 3000);
    }); 

    expect(screen.getByText("Card List")).toBeInTheDocument();
  });

}); */
