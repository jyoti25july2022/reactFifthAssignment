import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoDetail from "./pages/TodoDetail";

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
}
