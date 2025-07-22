import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Study/06-react-router/Home";
import About from "./Study/06-react-router/About";
import UserDetail from "./Study/06-react-router/UserDetail";

function AppRouter() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/42">User 42</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
