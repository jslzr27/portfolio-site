import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import * as firebase from "firebase";


window.onload = function() {

    // Your web app's Firebase configuration
  
    if (!firebase.apps.length) {
      firebase.initializeApp({
          apiKey: "AIzaSyCxLGKAL4G4V-JqX1fy3J7rhZTRyQUkLIQ",
          authDomain: "portfolio-react-50d67.firebaseapp.com",
          databaseURL: "https://portfolio-react-50d67.firebaseio.com",
          projectId: "portfolio-react-50d67",
          storageBucket: "portfolio-react-50d67.appspot.com",
          messagingSenderId: "429410276458",  
          appId: "1:429410276458:web:6e3040a7a65fcbca"
        });
   }
  
  var messagesRef = firebase.database().ref("messages");
  //listen to form submit
  document.getElementById('contactForm').addEventListener("submit", submitForm);
  //Submit form
  function submitForm(e) {
      e.preventDefault();
      //Get values
      let name = getInputValues('name');
      let email = getInputValues('email');
      let message = getInputValues('message');
  
      //save message
      saveMessage(name, email, message);
  
      //alert user
      document.querySelector(".alert").style.display = 'block';

        //hide alert after 3 seconds
        setTimeout(function(){
            document.querySelector(".alert").style.display = 'none';
        },3000)

      //clear form
      document.getElementById('contactForm').reset();
  
  }
  
  //Get form values
  function getInputValues(id) {
      return document.getElementById(id).value;
    }  
  
  function saveMessage(name, email, message) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        email: email,
        message: message
      })
    }
  }

class ContactPage extends Component {

    render(){
        return (
            <Grid className="flex" id="contact-page">
                <h1>Contact Me</h1>
                <Typography id="contact-question">Have a question or want to work together?</Typography>
                <div className="alert">Your message has been sent</div>
                <Grid id="contactPage" className="flex">
                    <form className="flex" id="contactForm" onSubmit={this.submitForm}>
                        <input type="text" name="name" id="name" placeholder="Your Name" required></input>
                        <input type="email" name="email" id="email" placeholder="Email Address" required></input>
                        <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
                        <Button type="submit" id="contact-submit">
                            submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        )
    }


}

export default ContactPage;