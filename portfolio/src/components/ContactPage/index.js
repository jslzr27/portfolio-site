import React, { Component } from "react";
import "./style.css";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';


// class ContactPage extends Component {
//     render() {
//         return(
//             <div className="section" id="contact">
//                 <h1>ContactPage</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida consequat sem, vitae consectetur sapien imperdiet a. Sed tristique lacinia arcu, non fringilla mi dapibus at. Cras vel arcu sit amet ex maximus consectetur vitae quis eros. In commodo elit ac nulla maximus pretium. Vivamus nec rhoncus arcu. Duis ultricies mattis enim, in sodales dolor dignissim vitae. Vivamus ante nisl, sollicitudin ac sem in, dignissim laoreet ex. Etiam eget leo vel metus ultricies malesuada. Suspendisse sagittis fringilla purus, nec tristique est eleifend vitae.

// Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras in ligula pellentesque, cursus felis at, congue ante. Mauris bibendum ipsum lectus, eget aliquet diam laoreet et. Phasellus bibendum facilisis consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec euismod in sem in semper. Proin feugiat tempor risus, sed lobortis nibh blandit nec. Morbi mollis, mi ac consequat malesuada, felis ligula scelerisque ex, vel maximus justo lectus at risus. Morbi vel feugiat dolor, nec pretium metus. Cras purus purus, euismod nec faucibus et, porttitor at nisl. Integer dolor quam, molestie id ex et, posuere malesuada nisl. Quisque suscipit lorem at maximus laoreet. Proin pulvinar a nisl non vehicula. Aenean sit amet risus ac arcu gravida vulputate feugiat vel arcu. Cras sed pulvinar magna, non congue elit.

// Nullam faucibus cursus mollis. Ut vitae rutrum metus, non imperdiet nisi. Nam nisl ipsum, suscipit et nunc hendrerit, convallis volutpat turpis. Suspendisse commodo vulputate lacus, vitae tristique mauris lacinia at. Cras metus dolor, ultrices vitae elementum nec, congue sit amet justo. Nunc quis convallis nunc. Ut sed velit in turpis hendrerit viverra id ac erat. Curabitur vulputate placerat nisi vel congue. Nulla facilisi. Curabitur eget blandit urna. Pellentesque nulla ligula, euismod lobortis laoreet a, feugiat sed nibh. Nunc finibus eu nisl quis suscipit.

// Donec faucibus nisi id eleifend eleifend. Curabitur non auctor dui. Etiam egestas enim enim, sit amet efficitur nulla dapibus eget. Sed scelerisque, nunc et vulputate gravida, mi est auctor tortor, vitae commodo lacus sem et quam. Suspendisse at tellus accumsan, imperdiet justo ut, ultrices arcu. Duis ultricies justo in risus rhoncus, id finibus purus semper. Quisque vel purus sit amet nunc scelerisque posuere.

// Suspendisse finibus justo arcu. Sed enim sem, tincidunt vel finibus eu, rhoncus nec tellus. Aenean molestie pretium mauris, vel posuere erat rutrum nec. Nulla efficitur accumsan sem, mollis iaculis orci molestie eget. Nulla cursus, justo sit amet condimentum vestibulum, sapien leo dignissim dolor, ac lacinia tellus quam ut libero. Quisque posuere mi sed pulvinar sagittis. Nulla mollis ante sit amet leo pellentesque, placerat lobortis elit tristique. Sed vitae auctor ante. Integer a imperdiet enim, id convallis nulla. Pellentesque risus leo, pellentesque quis scelerisque sed, aliquam nec nisl.
// </p>
//             </div>
//         )
//     }
// };


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