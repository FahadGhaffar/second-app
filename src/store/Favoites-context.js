import { createContext, useState } from "react";



const FavoitesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    isFavorite: (meetupId) => { }

});




export function FavoitesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState();


    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((preUserFavorites) => {
            return preUserFavorites.concat(favoriteMeetup);
        });

    }

    function removeFavoriteHandler(meetupId) {

        setUserFavorites((preUserFavorites) => {

            return preUserFavorites.filter(meetup => meetup.id !== meetupId)
        })

    }

    function itemIsFavoriteHandler(meetupId) {

        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: itemIsFavoriteHandler


    };


    return <FavoitesContext.Provider value={context}>

        {props.children}
    </FavoitesContext.Provider>
}

export default FavoitesContext;