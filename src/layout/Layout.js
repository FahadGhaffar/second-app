import classes from "./Layout.module.css"
import MainNavigations from "./MainNavigations";





export default function Layout(props) {

    return (
        <div>
            <MainNavigations />
            <main className={classes.main}>

                {props.children}
            </main>



        </div>

    );

}