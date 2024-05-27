import React from "react";
import ReactDOM from "react-dom/client";
import "@/shared/css/base.css";
import { Provider as StoreProvider } from "react-redux";
import store from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={AppRouter}/>
    </StoreProvider>
  </React.StrictMode>,
)
