import { Provider } from "react-redux";
import { store } from "./store";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
