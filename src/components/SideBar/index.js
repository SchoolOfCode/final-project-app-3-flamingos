import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import css from "./sideBar.module.css";
import '../../index.css';


const SideBar = ()=> {

    return (
        
        <Menu 
            width={'50%'}>
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
                </div>
        </Menu>
    )

}

export default SideBar;