import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import SignInPage from "./components/SignInPage";
import Visualisation from "./components/Visualisation";
import Newworker from "./components/Newworker";
import Prediction from "./components/Prediction";
import Prevention from "./components/Prevention";
import NewAccident from "./components/NewAccident";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPageWithNavigation />} />
        <Route
          path="/Visualisation"
          element={<VisualisationWithNavigation />}
        />
        <Route path="/Newworker" element={<NewworkerWithNavigation />} />
        <Route path="/Prediction" element={<PredictionWithNavigation />} />
        <Route path="/Prevention" element={<PreventionWithNavigation />} />
        <Route path="/NewAccident" element={<NewAccidentWithNavigation />} />
      </Routes>
    </Router>
  );
}

// Wrapper components with navigation buttons

function SignInPageWithNavigation() {
  const navigate = useNavigate();
  return (
    <div>
      <SignInPage />
      <button onClick={() => navigate("/Visualisation")}>Visualisation</button>
    </div>
  );
}

function VisualisationWithNavigation() {
  const navigate = useNavigate();
  return (
    <div>
      <Visualisation />
      <button onClick={() => navigate("/Newworker")}> New Employee</button>
      <button onClick={() => navigate("/Prediction")}>Prediction</button>
    </div>
  );
}

function NewworkerWithNavigation() {
  const navigate = useNavigate();
  return (
    <div>
      <Newworker />
      <button onClick={() => navigate("/Prevention")}>Prevention</button>
      <button onClick={() => navigate("/NewAccident")}>New Accident</button>
    </div>
  );
}

function PredictionWithNavigation() {
  const navigate = useNavigate();
  return (
    <div>
      <Prediction />
      <button onClick={() => navigate("/Prevention")}>Go to Prevention</button>
    </div>
  );
}

function PreventionWithNavigation() {
  const navigate = useNavigate();
  return (
    <div>
      <Prevention />
      <button onClick={() => navigate("/Newaccident")}>
        Go to New Accident
      </button>
    </div>
  );
}

function NewAccidentWithNavigation() {
  const navigate = useNavigate();
  return (
    <div>
      <NewAccident />
      <button onClick={() => navigate("/Visualisation")}>
        Go to Visualisation
      </button>
    </div>
  );
}

export default App;
