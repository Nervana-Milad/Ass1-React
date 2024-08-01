import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Ass1-React/",
      element: <Layout></Layout>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        { path: "portfolio", element: <Portfolio></Portfolio> },
        { path: "contact", element: <Contact></Contact> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
