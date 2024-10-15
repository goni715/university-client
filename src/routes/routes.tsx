import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import App from "../App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "team",
        //   element: <Team />,
        //   loader: teamLoader,
        },
      ],
    },
  ]);


export default router;