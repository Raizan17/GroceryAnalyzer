import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Dairy from "./pages/Dairy";
import Bakery from "./pages/Bakery";
import Beverage from "./pages/Beverage";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Meat from "./pages/Meat";
import Cart from "./pages/Cart";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/dairy",
        element: <Dairy />,
      },
      {
        path: "/meat",
        element: <Meat />,
      },
      {
        path: "/vegetables",
        element: <Vegetables />,
      },
      {
        path: "/beverage",
        element: <Beverage />,
      },
      {
        path: "/bakery",
        element: <Bakery />,
      },
      {
        path: "/Fruits",
        element: <Fruits />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
