import { useState, useEffect } from "react";

import Meetuplist from "../components/meetups/Meetuplist";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];


export default function AllMeetups() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetup, setIsloadedMeetup] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-started-new-default-rtdb.firebaseio.com/meetups.json'
        ).then(
            (response) => {
                return response.json();
            }
        ).then(
            (data) => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]

                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setIsloadedMeetup(meetups)


            }


        );
    }, []);

    if (isLoading) {
        return (

            <section>
                <p>...Loading</p>
            </section>
        );
    }


    return (

        <section>
            <h1>All Meetups</h1>

            <div><Meetuplist meetup={loadedMeetup} /></div>
        </section>

    )

}