import React, { Component } from "react";
import "./style.css";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';


class ContactPage extends Component {
    state={
        value:""
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <Grid className="flex" id="contact-page">
                <h1>Contact Me</h1>
                <Typography id="contact-question">Have a question or want to work together?</Typography>
            <Grid id="contact-form" className="flex">
                {/* <FormControl>
                    <TextField
                        name="full-name"
                        id="standard-with-placeholder first"
                        label="Your Name"
                        placeholder="John Doe"
                        margin="normal"
                        className="text-field"

                    />
                    <TextField 
                        name="email"
                        id="standard-with-placeholder email"
                        label="Email address"
                        placeholder="email@website.com"
                        type="email"
                        margin="normal"
                        className="text-field"

                    />
                    <TextField
                        name="message"
                        id="standard-textarea"
                        label="Message"
                        placeholder="Your Message"
                        multiline
                        margin="normal"
                        className="text-field"

                    />
                    <Button onClick={this.continue} id="button">
                        submit
                    </Button>
                </FormControl> */}

                <form className="flex" id="form-contact">
                    <input type="text" name="name" id="name" placeholder="Your Name" />
                    <input type="text" name="email" id="email" placeholder="Email Address" value={this.state.value} onChange={this.handleChange} />
                    <textarea name="message" id="message" rows="5" placeholder="Message" value={this.state.value} onChange={this.handleChange} />
                    <Button type="submit" onClick={this.handleSubmit} id="button-submit">
                        submit
                    </Button>
                </form>
            </Grid>
            </Grid>
        )
    }
}

ContactPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default ContactPage;