import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./home";
import ImageDetails from "./imageDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <ImageDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
