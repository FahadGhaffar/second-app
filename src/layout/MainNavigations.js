
import { Link } from "react-router-dom";

import classes from "./MainNavigations.module.css";


function MainNavigations() {
    return (

        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>

                    <li>  <Link to="/">All Meetup</Link></li>
                    <li>  <Link to="/new-meetup">New MeetUp </Link></li>

                    <li>  <Link to="/favorites">Favorites</Link></li>


                </ul>
            </nav>


        </header>
    );
}

export default MainNavigations;