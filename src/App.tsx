import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Admin } from "./pages/admin";
import { Networks } from "./pages/networks";
import { Private } from "./Routes/Private";
import { ErrorPage } from "./pages/error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "/networks",
    element: <Networks />
  },
  {
    path: '/admin',
    element: <Private> <Admin /> </Private>
  },
  {
    path: '/admin/social',
    element: <Private> <Networks /> </Private>
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export  { router };