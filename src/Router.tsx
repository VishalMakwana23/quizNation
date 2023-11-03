import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz/:slug",
    element: <Quiz />,
  },
]);
export const Router = () => {
  return <RouterProvider router={router} />;
};
