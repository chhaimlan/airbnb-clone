import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchpage from "./Searchpage";
import Typeroom from "./Typeroom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<Searchpage />} />
          <Route path="/" element={<Home />} />
          <Route path="/typeroom" element={<Typeroom />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
