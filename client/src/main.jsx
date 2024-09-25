import { createRoot } from "react-dom/client";
import Router from "./router";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
      <Toaster />
    </Provider>
  </BrowserRouter>
);
