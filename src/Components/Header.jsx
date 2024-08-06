import '../Components/CSS/Header.css';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <div className="header-nav">
                <div className="header-left">
                    <Link to={'/'}>
                        <h1>NC NEWS</h1>
                    </Link>
                </div>
                <div className="header-right">
                    <h3>👤</h3>
                    <button>Sign in</button>
                </div>
            </div>
        </header>
    );
}