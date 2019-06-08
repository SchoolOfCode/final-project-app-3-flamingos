import React, {useContext} from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import css from "./SideBar.module.css";
import '../../index.css';
import { LoggedInContext } from "../../components/LoggedInContext";
import MenuButton from '../MenuButton';


const SideBar = () => {
    const { isLoggedIn, logout } = useContext(LoggedInContext);
    return isLoggedIn ? (

        <Menu
            width={'40%'}>
            <div className={css.mainContainer}>
                <div className={css.itemContainer}>
                    <Link to="/live">
                        <div className={css.title}>live</div>
                    </Link>
                </div>

                <div className={css.itemContainer}>
                    <Link to="/new">
                        <div className={css.title}>post</div>
                    </Link>
                </div>
                <div className={css.itemContainer}>
                    <Link to="/profile">
                        <div className={css.title}>profile</div>
                    </Link>
                </div>

                <div className={css.loginContainer}>
                    <div className={css.title} onClick={logout}>logout</div>
                </div>
            </div>
        </Menu>
    ) : (
            <Menu
                width={'30%'}>
                <div className={css.mainContainer}>
                    <div className={css.itemContainer}>
                        <Link to="/live">
                            <div className={css.title}>live</div>
                        </Link>
                    </div>

                    <div className={css.itemContainer}>
                        <Link to="/new">
                            <div className={css.title}>post</div>
                        </Link>
                    </div>
                    <div className={css.itemContainer}>
                        <Link to="/profile">
                            <div className={css.title}>profile</div>
                        </Link>
                    </div>

                    <div className={css.loginContainer}>
                        <Link className={css.link} to="/login">
                            <div className={css.title}>login</div>
                        </Link>
                        <Link className={css.link} to="/register">
                            <div className={css.title}>register</div>
                        </Link>
                    </div>
                </div>
            </Menu>
        )

}

export default SideBar;