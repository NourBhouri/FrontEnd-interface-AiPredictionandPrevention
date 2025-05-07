import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import Prediction from "./components/Prediction";
import NewAccident from "./components/NewAccident";
import Newworker from "./components/Newworker";
import Visualisation from "./components/Visualisation";
import Prevention from "./components/Prevention";

function App() {
  return (
    <Router>
      <Routes>
        {/* Make SignInPage the default entry point */}
        <Route path="/" element={<SignInPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/Prediction" element={<Prediction />} />
        <Route path="/Prevention" element={<Prevention />} />
        <Route path="/NewAccident" element={<NewAccident />} />
        <Route path="/Newworker" element={<Newworker />} />
        <Route path="/Visualisation" element={<Visualisation />} />
      </Routes>
    </Router>
  );
}

export default App;
