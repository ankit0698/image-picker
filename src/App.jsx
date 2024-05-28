import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./home";
import ImageDetails from "./imageDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: (
        <div>
          <h1 className="text-headline">Sorry wrong route path</h1>
        </div>
      ),
    },
    {
      path: "/details/:id",
      element: <ImageDetails />,
      errorElement: (
        <div>
          <h1 className="text-headline">Sorry wrong route path</h1>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
