import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

export const AppRouter = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <div>imimimi</div>
      }
    ]
  }
]);