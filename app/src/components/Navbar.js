import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">CRC Career Reality Checker</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/questions">Assessment</Link>
        <Link to="/insights">Insights</Link>
      </div>
    </nav>
  );
}

export default Navbar;