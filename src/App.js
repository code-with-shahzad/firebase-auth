import "./App.css";
import { AuthProvider } from "./Authcontext/authContext";
import { Dashborad } from "./Components/Dashborad";
import { LogIn } from "./Components/logIn";
import { SingnUp } from "./Components/singup";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./Components/protectedRoute";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "450px" }}>
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashborad />
                  </ProtectedRoute>}
              />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SingnUp />} />
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
