import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/store/store.js";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
