import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faSearch, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import { useState } from "react";

const Header = () => {
    const [mobile, setMobile] = useState(false);
    return (
        <>
            <header>
                <div className="container flexSB">
                    <nav className="flexSB">
                        <div className="logo">
                            <img className="MyLogo" src='../../images/logo.webp' alt='' />
                        </div>
                        <ul className={mobile ? 'navMenu-list' : 'flexSB'} onClick={() => setMobile(false)}>
                            <Link to='/'>Home</Link>
                            <Link to='/trending'>Trending</Link>
                            <Link to='/upcomming'>Upcoming</Link>
                            <Link to='/latest'>Latest</Link>
                            <Link to='/search'>Search </Link>
                        </ul>
                        <button className="toggle" onClick={() => setMobile(!mobile)}>
                            {mobile ? <FontAwesomeIcon className="fontIcons" icon={faTimes} />
                                : <FontAwesomeIcon className="fontIcons" icon={faBars} />}

                        </button>
                    </nav>
                    <div className="account flexSB">
                        <FontAwesomeIcon className="fontIcons" icon={faBell} />
                        <FontAwesomeIcon className="fontIcons" icon={faUser} />
                        <Link to='/login'><button>Login Now</button></Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
