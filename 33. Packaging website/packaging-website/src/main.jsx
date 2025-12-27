// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import "aos/dist/aos.css";


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";

import "aos/dist/aos.css";
import { store } from "./1App/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

