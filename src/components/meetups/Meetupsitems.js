import Card from '../ui/Cards'
import classes from './MeetupItem.module.css'
import { useContext } from 'react'
import FavoitesContext from '../../store/Favoites-context'

export default function Meetupitems(props) {

    const favoriteCtx = useContext(FavoitesContext);

    const itemIsFavorite = favoriteCtx.isFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        favoriteCtx.addFavorite({

            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address


        });
        console.log(itemIsFavorite);
        if (!itemIsFavorite) {

            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({

                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address


            });
        }
    }

    return (

        <li className={classes.item}>
            <Card>
                <div className={classes.image} >
                    <img src={props.image} alt={props.title} />

                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove From Favorite " : "To Favorite"}</button>
                </div>

            </Card>
        </li>
    )


}