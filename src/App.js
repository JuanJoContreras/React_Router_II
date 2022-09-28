import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";
import Pokemones from "./views/Pokemones";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
