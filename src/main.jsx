// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// // import App from "./App.jsx";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import { About, Home, Contact, Recent, Layout, Education} from "./components/index";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="/aboutme" element={<About />} />
//       <Route path="/education" element={<Education />} />
//       <Route path="/recent" element={<Recent />} />
//       <Route path="/contact" element={<Contact />} />
//     </Route>
//   )
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

// import {
//   About,
//   Home,
//   Contact,
//   Recent,
//   Layout,
//   Education,
//   Achievement,
// } from "./components";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="aboutme" element={<About />} />
//       <Route path="education" element={<Education />} />
//       <Route path="achievement" element={<Achievement />} />
//       <Route path="recent" element={<Recent />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

{
  /* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */
}
