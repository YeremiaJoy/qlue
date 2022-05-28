import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Create from "./pages/create";
import Index from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profile/:name" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
