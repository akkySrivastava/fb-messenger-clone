import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core'
import {  FormControl,  Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import $ from 'jquery'

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    db
    .collection('messages')
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message:doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])

  const sendMessage = (e) => {
      e.preventDefault();

      db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
  }

  $(window).scroll(function(){
    if($(this).scrollTop() > 10){//Here 200 may be not be exactly 200px
      $('.app__body').hide();
    } else {
      $('.app__body').css({"display" : "block"})
    }
  });



  return (
    <div className="app">
      <img
        className = "app__logo"
        alt = ""
        src = "https://scontent.fpat2-2.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=2&_nc_sid=6825c5&_nc_ohc=ozHS44QT50YAX_LTjQM&_nc_ht=scontent.fpat2-2.fna&oh=1a7fea08f34e67eda443653e4bbe85a0&oe=5FEB007D"
      />
      <h3>Messenger</h3>
      <h5>Made With 💖 by Code With Akky</h5>
        <form className = "app__body">
        <FormControl className = "app__form">
            <Input className = "app__input" placeholder = "Enter a message..." value = {input} onChange = { e => setInput(e.target.value)}></Input>
            <IconButton
              className = "app__icon" 
              type = "submit" 
              disabled ={!input}  
              variant = "contained" 
              color = "primary" 
              onClick = {sendMessage} 
            ><SendIcon className = "app__sendIcon" /></IconButton>
        </FormControl>  
        </form>

        <FlipMove>
          {
            messages.map(({ id, message}) => (
              <Message 
                key = {id} 
                username = {username} 
                message = {message}/>
            ))
          }
        </FlipMove>
        
        
    </div>
  );
}

export default App;
