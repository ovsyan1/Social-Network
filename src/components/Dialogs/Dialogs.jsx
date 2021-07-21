import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';


const Message = (props) => {
          return(<div className={classes.message}>{props.message}</div>)
}


const Dialogs = (props) => {

    let dialogs = [
    { id: 1, name:'Dimych'},
    { id: 2, name: 'Andrew'},
    { id: 3, name:'Sveta'},
    { id: 4, name:'Sasha'},
    { id: 5, name:'Sasha'},
    { id: 6, name:'Valera'}
    ];

    let messages = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'How are you?'},
    { id: 3, message: 'yo'},
    { id: 4, message: 'yo'},
    { id: 5, message: 'yo'},
    { id: 6, message: 'yo'}
    ];

    let dialogsElements = dialogs.map(dialog => {
       return <DialogItem name={dialog.name} id={dialog.id} />
    })

    let messagesElements = messages.map(message => {
        return <Message message={message.message}/>
    })
    

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;