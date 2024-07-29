import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
            <nav id="nav-bar">
                <Link to='/'><button>Home</button></Link>
                <Link to='/about'><button>About</button></Link>
                <Link to='/services'><button>Services</button></Link>
            </nav>
    )
}