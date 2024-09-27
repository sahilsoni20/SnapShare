import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Sigin";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {" "}
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
