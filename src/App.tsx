import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import { Header } from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<h1>sobre</h1>} />
        <Route path="/*" element={<h1>teste</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
