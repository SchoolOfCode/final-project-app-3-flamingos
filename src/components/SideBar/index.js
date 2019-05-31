import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import css from "./sideBar.module.css";

const SideBar = ()=> {

    return (
        
        <Menu>
            <div className={css.mainContainer}>
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
        </Menu>
    )

}

export default SideBar;