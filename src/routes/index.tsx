import { createBrowserRouter, Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";



const routes = createBrowserRouter(
  [

    {
      path: "/",
      element: <>
        <ResponsiveAppBar />
        <Outlet />
      </>,
      children: [
        {
          path: "/Products",
          index: true,
          element: <>
            Hola
          </>
        },
        {
          path: "/login",
          element: <>
            Login
          </>
        },
      ]

    }
  ]
);


export default routes;