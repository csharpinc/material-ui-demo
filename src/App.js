import "./App.css";
import Navbar from "./Components/Navbar";
import RegistrationForm from "./Pages/RegistrationForm";
import TypographyComponent from "./Pages/TypographyComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route
            path="/TypographyComponent"
            element={<TypographyComponent />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
