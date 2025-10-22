import { Link } from "react-router";
import { TbHome, TbBookmark, TbStar, TbSettings } from "react-icons/tb";

export default function Nav({ home = "black", archive = "black", popular = "black", settings = "black" }){
    return(
        <nav className="nav-section">
            <ul className="nav-ul">
                <li className="nav-ul__li">
                    <Link to="/" style={{color: home}}>
                    <TbHome/>
                    <p>Home</p>
                    </Link>
                </li>
                <li className="nav-ul__li">
                    <Link to="/archive" style={{color: archive}}>
                    <TbBookmark/>
                    <p>Archive</p>
                    </Link>
                </li>
                <li className="nav-ul__li">
                    <Link to="/popular" style={{color: popular}}>
                    <TbStar/>
                    <p>Popular</p>
                    </Link>
                </li>
                <li className="nav-ul__li">
                    <Link to="/settings" style={{color: settings}}>
                    <TbSettings/>
                    <p>Settings</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}