import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material"; // Käytämme Containeria asettelua varten
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Container sx={{ marginTop: 4 }}>
          <Routes>
            <Route path="/homepage" element={<Home />} />
            <Route path="/register" element={<UserPage />} />
            <Route path="/" element={<UsersList />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
