import classes from './MeetupItem.module.css'
import Meetupitems from './Meetupsitems'


export default function Meetuplist(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <Meetupitems

                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}

                />))}
        </ul>
    )
}