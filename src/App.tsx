import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Sigin";
import { Toaster } from "react-hot-toast";
import Images from "./components/Images/Images";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      {" "}
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/image"
            element={
              <PrivateRoute>
                <Images />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
