import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import CallForPapers from "./Pages/CallForPapers/CallForPapers";
import Commitee from "./Pages/Comittee/Commitee";
import Register from "./Pages/Register/Register";
import GoogleLoginButton from "./Components/GoogleLoginButton";
import EventRegister from "./Pages/EventRegister/EventRegister";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/call_for_papers" element={<CallForPapers />}></Route>
          <Route path="/committee" element={<Commitee />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<GoogleLoginButton />}></Route>
          <Route path="/eventRegister" element={<EventRegister />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
