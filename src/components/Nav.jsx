import { Link } from "react-router";

export default function Nav(){
    return(
        <nav className="nav-section">
            <ul className="nav-section__ul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/archive">Archive</Link>
                </li>
                <li>
                    <Link to="/popular">Popular</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    )
}