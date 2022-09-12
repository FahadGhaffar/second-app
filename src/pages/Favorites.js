import { useContext } from "react";


import FavoitesContext from "../store/Favoites-context";
import Meetuplist from "../components/meetups/Meetuplist";

export default function Favorties() {
    const favoitesCtx = useContext(FavoitesContext);
    let context;

    if (favoitesCtx.totalFavorites === 0) {
        context = <p> Empty</p>

    } else {

        context = <Meetuplist meetup={favoitesCtx.favorites} />

    }


    return (
        <section>
            <h1>Favorites</h1>

            <div>{context}</div>
        </section>



    );


}