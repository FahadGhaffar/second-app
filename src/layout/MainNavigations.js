
import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigations.module.css";
import FavoitesContext from "../store/Favoites-context";

function MainNavigations() {
    const favoriteCtx = useContext(FavoitesContext);
    return (

        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>

                    <li>  <Link to="/">All Meetup</Link></li>
                    <li>  <Link to="/new-meetup">New MeetUp </Link></li>

                    <li>  <Link to="/favorites">Favorites
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                    </Link></li>


                </ul>
            </nav>


        </header>
    );
}

export default MainNavigations;