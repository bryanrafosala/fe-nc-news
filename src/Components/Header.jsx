import "../Components/CSS/Header.css";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <div className="header-nav">
        <div className="header-left">
          <Link to={"/"}>
            <h1>NC NEWS</h1>
          </Link>
        </div>
        <div className="header-right">
        <button>
            <MdAccountCircle />
            
          </button>
        </div>
      </div>
    </header>
  );
}
