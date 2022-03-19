import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { UserData } from "./components/UserData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Navigate to="/users" />} />
          <Route exact path="/users" element={<Home />} />
          <Route exact path="/users/:userId" element={<UserData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
