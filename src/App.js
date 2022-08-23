import { Route, Switch } from "react-router-dom"

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites"
import NewMeetup from "./pages/NewMeetup";
import MainNavigations from "./layout/MainNavigations";

function App() {
  return (
    <div className="App">
      <MainNavigations />
      <Switch>
        <Route path="/" exact >
          <AllMeetups />


        </Route>

        <Route path="/new-meetup">
          <NewMeetup />
        </Route>

        <Route path="/favorites">
          <Favorites />

        </Route>
      </Switch>
    </div>
  );
}

export default App;
