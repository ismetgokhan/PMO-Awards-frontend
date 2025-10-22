import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Participants from "./pages/Participants";
import Jury from "./pages/Jury";
import History2025 from "./pages/History2025";
import Volunteers from "./pages/Volunteers";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashBoard";
import JuryDashboard from "./pages/JuryDashboard";
import ParticipantDashboard from "./pages/ParticipantDashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Topbar /> {/* her şeyin üstünde */}
        <Navbar /> {/* topbar’ın hemen altında */}
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/jury" element={<Jury />} />
            <Route path="/history2025" element={<History2025 />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/jury-dashboard" element={<JuryDashboard />} />
            <Route path="/participant-dashboard" element={<ParticipantDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
