import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import css from "./Nav.module.css";
import "../../index.css";

// import Logo from "../Logo";

const Nav = props => {
    return (
        <nav className={css.container}>
            <Router>
                <ul>
                    <li className={css.logo}>Logo</li>
                    {/* <li className={css.logo}><Logo/></li> */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/post">Post</Link>
                    </li>
                    <li>
                        <Link to="/live">Live</Link>
                    </li>
                </ul>
            </Router>
        </nav>
    );
};

export default Nav;
