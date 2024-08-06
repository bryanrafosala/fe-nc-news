import '../Components/CSS/Header.css';

export default function Header() {
    return (
        <header>
            <div className="header-nav">
                <div className="header-left">
                    <h1>NC NEWS</h1>
                </div>
                <div className="header-right">
                    <h3>👤</h3>
                    <button>Sign in</button>
                </div>
            </div>
        </header>
    );
}