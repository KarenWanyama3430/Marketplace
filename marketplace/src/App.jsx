import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import MarketPlace from "./pages/marketplace";
import Login from "./pages/login";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotPassword";
import CreateAccount from "./pages/createaccount";
import ShowRoom from "./pages/showroom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/marketplace",
    element: <MarketPlace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/showroom/:id",
    element: <ShowRoom />,
  },
]);

function App() {

return <RouterProvider router={router} />;


}

export default App;
