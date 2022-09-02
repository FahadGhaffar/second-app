import {useRef} from "react";
import Card from '../ui/Cards'

import classes from "./NewMeetupForm.module.css"


export default function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const urlInputRef = useRef();
    const addressInputRef = useRef();
    const desInputRef = useRef();


 function submitHandler(event){
    event.preventDefault();


    const enteredTitle =titleInputRef.current.value;
    const enteredUrl =urlInputRef.current.value;
    const enteredAddress =addressInputRef.current.value;
    const enteredDes =desInputRef.current.value;


    const meetupData={
        title: enteredTitle,
        image : enteredUrl,
        address : enteredAddress,
        description : enteredDes,

    }


    console.log(meetupData);
    props.onAddMeetup(meetupData);
  
 } 
   


  return (
   <Card>

    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
      <label htmlFor='title'> Meetup Title </label>
        <input type="text" required id='title' ref={titleInputRef} />
        </div>

        <div className={classes.control}>
      <label htmlFor='image'> Meetup Image </label>
        <input type="url" required id='image' ref={urlInputRef}  />
        </div>

        <div className={classes.control}>
      <label htmlFor='address'> Address </label>
        <input type="text" required id='address'  ref={addressInputRef} />
        </div>
        <div className={classes.control}>
      <label htmlFor='description'> Description </label>
        <textarea id='description' required rows="5" ref={desInputRef} ></textarea>
        </div>

        <div className={classes.actions}>
       <button>Action</button>
        </div>

    </form>
    </Card>
  );
}