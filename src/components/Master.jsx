// Master.jsx
import { Link } from "react-router-dom";
import "../components/styles.css";

function Master() {
  return (
    <div className="head">
      <Link to="/">Main Page</Link>
      <Link to="/temperature">Weather Page</Link>
      <Link to="/population">Population Page</Link>
    </div>
  );
}

export default Master;
