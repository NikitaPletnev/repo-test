import React from "react";
import Modal from "react-modal"
import "./index.css";
import ShopApp  from "./components/ShopApp";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from 'react-dom/client'

Modal.setAppElement("#root")

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ShopApp/>
  </React.StrictMode>
);

serviceWorker.unregister();
