import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import BetRequest from "./pages/BetRequest";
import TribePage from "./pages/TribePage";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import ViewTeamMembers from "./pages/ViewTeamMembers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
        </QueryClientProvider>
        <ToastContainer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/betrequest",
          element: <BetRequest />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/tribepage/:id",
          element: <TribePage />,
        },
        {
          path: "/seeteammembers/:betTribeId",
          element: <ViewTeamMembers />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
