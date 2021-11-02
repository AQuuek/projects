import React, {useContext} from 'react';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.navbar}>
            <div className={classes.link_group}>
                <Link className ={classes.navbar_links} to="/posts">
                    Посты
                </Link>
                <Link className ={classes.navbar_links} to="/about">
                    О нас
                </Link>
            </div>
            <button onClick={logout} className={classes.navbar_btn}>Выйти</button>
        </div>
    );
};

export default Navbar;