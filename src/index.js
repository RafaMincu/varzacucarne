import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);