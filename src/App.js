import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Index from "./pages/index"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile/:name" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
