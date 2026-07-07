import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyAnimes from "./pages/MyAnimes";
import NovoAnime from "./pages/NovoAnime";
import EditarAnime from "./pages/EditarAnime";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#030101]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/my-animes",
    element: <MyAnimes />,
  },
  {
    path: "/novo-anime",
    element: <NovoAnime />,
  },
  {
    path: "/editar-anime/:id",
    element: <EditarAnime />,
  },
]);
