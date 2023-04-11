import { RouterProvider, createMemoryRouter } from "react-router-dom";
import * as React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import Login from "../routes/Login";
import Search from "../routes/Search";
import Card from "../routes/Card";
import { Navigate } from "react-router-dom";
import { AppProvider } from "../context/AppContext";

const data = [
  {
    id: 74153887,
    name: "Dark Scorpion - Meanae the Thorn",
    type: "Effect Monster",
    frameType: "effect",
    desc: 'When this card inflicts Battle Damage to your opponent, you can activate 1 of these effects:\n● Add 1 "Dark Scorpion" card from your Deck to your hand.\n● Target 1 "Dark Scorpion" card in your Graveyard; add that target to your hand.',
    atk: 1000,
    def: 1800,
    level: 4,
    race: "Warrior",
    attribute: "DARK",
    archetype: "Dark Scorpion",
    card_images: [
      {
        id: 74153887,
        image_url: "https://images.ygoprodeck.com/images/cards/74153887.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/74153887.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/74153887.jpg",
      },
    ],
  },
  {
    id: 20858318,
    name: "Dark Scorpion Combination",
    type: "Trap Card",
    frameType: "trap",
    desc: 'You can only activate this card when there are "Don Zaloog", "Cliff the Trap Remover", "Dark Scorpion - Chick the Yellow", "Dark Scorpion - Gorg the Strong", and "Dark Scorpion - Meanae the Thorn" face-up on your side of the field. During this turn, any of these 5 cards can attack your opponent\'s Life Points directly. In that case, the Battle Damage inflicted to your opponent by each of those cards becomes 400 points.',
    race: "Normal",
    archetype: "Dark Scorpion",
    card_images: [
      {
        id: 20858318,
        image_url: "https://images.ygoprodeck.com/images/cards/20858318.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/20858318.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/20858318.jpg",
      },
    ],
  },
  {
    id: 68191243,
    name: "Mustering of the Dark Scorpions",
    type: "Spell Card",
    frameType: "spell",
    desc: 'If you control a face-up "Don Zaloog": You can Special Summon any number of "Dark Scorpion" monsters from your hand, but only 1 copy of each.',
    race: "Normal",
    archetype: "Dark Scorpion",
    card_images: [
      {
        id: 68191243,
        image_url: "https://images.ygoprodeck.com/images/cards/68191243.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/68191243.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/68191243.jpg",
      },
    ],
  },
];

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/search", element: <Search mockCardList={data} /> },
      { path: "/card", element: <Card /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];

const router = createMemoryRouter(routes, { initialEntries: ["/"] });

const renderApp = (
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);

test("HOME - Verifica se a página contém todos os títulos", async () => {
  render(renderApp);

  await waitFor(() => screen.findAllByRole("heading"));
  expect(screen.getByText("BlackWing")).toBeInTheDocument();
  expect(screen.getByText("Database")).toBeInTheDocument();
  expect(
    screen.getByText("Searching for all cards of the")
  ).toBeInTheDocument();
  expect(screen.getByText("blackwing archetype.")).toBeInTheDocument();
});

test("HOME - Verifica se a página contém o link para a página search", async () => {
  render(renderApp);

  await waitFor(() => screen.findAllByRole("heading"));
  expect(screen.getByText("Search")).toBeInTheDocument();
});

test("HOME - Verifica se a página renderiza a imagem", async () => {
  render(renderApp);

  await waitFor(() => screen.findAllByRole("heading"));
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("HOME - Verifica se ao clicar em 'Search' a página é redirecionada", async () => {
  render(renderApp);

  fireEvent.click(screen.getByText("Search"));

  expect(screen.getByText("Card List")).toBeInTheDocument();
  expect(screen.getByText("Monsters")).toBeInTheDocument();
  expect(screen.getByText("Spells")).toBeInTheDocument();
  expect(screen.getByText("Traps")).toBeInTheDocument();
  expect(screen.getByText("Filter by:")).toBeInTheDocument();
  expect(await screen.findAllByRole("link")).toHaveLength(data.length);
});

test("SEARCH - Verifica se os botões de filtro estão funcionando corretamente", async () => {
  render(renderApp);

  await waitFor(() => screen.findAllByRole("link"));

  fireEvent.click(screen.getByText("Traps"));
  expect(await screen.findAllByRole("link")).toHaveLength(1);

  fireEvent.click(screen.getByText("Spells"));
  expect(await screen.findAllByRole("link")).toHaveLength(1);

  fireEvent.click(screen.getByText("Monsters"));
  expect(await screen.findAllByRole("link")).toHaveLength(1);
});

test("SEARCH - Verifica se ao clicar em um card a tela é redirecionada", async () => {
  render(renderApp);

  fireEvent.click(screen.getByText("Monsters"));
  fireEvent.click(screen.getByRole("img"));
  
  expect(screen.getByText("Card Details:")).toBeInTheDocument();
});

test("CARD - Verifica se os detalhes da carta clicada são renderizados", async () => {
  render(renderApp);

  fireEvent.click(screen.getByText("Search"));
  fireEvent.click(screen.getByText("Monsters"));
  fireEvent.click(await screen.findByRole("img"));

  expect(screen.getByText("Card Details:")).toBeInTheDocument();
  expect(screen.getByText(/atk: 1000/i)).toBeInTheDocument();
  expect(screen.getByText(/def: 1800/i)).toBeInTheDocument();
  expect(screen.getByText(/level: 4/i)).toBeInTheDocument();
  expect(screen.getByText(/race: warrior/i)).toBeInTheDocument();
  expect(screen.getByText(/attribute: dark/i)).toBeInTheDocument();
});

test("CARD - Verifica se obotão de voltar a página é renderizado", async () => {
  render(renderApp);

  fireEvent.click(screen.getByText("Search"));
  fireEvent.click(screen.getByText("Monsters"));
  fireEvent.click(await screen.findByRole("img"));

  expect(screen.getByText("Back to List")).toBeInTheDocument();
});
