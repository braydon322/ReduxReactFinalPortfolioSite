import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEmail, fetchEmails, updateEmail } from '../actions/actions';
import Email from './Email'
import '../App.css';
require('dotenv').config();

class ContactSection extends Component {

  constructor() {
    super();
    this.state = {
      autofocus: true,
      text: '',
      submitted: false
    };
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    });
  }


  handleSubmit(event) {
    require('dotenv').config();

    event.preventDefault();
    this.props.addEmail(this.state.text);
    this.setState({
      text: '',
      submitted: true
    });
}

  componentWillMount(){
    this.props.fetchEmails()
  }

  checkSubmit(){
    if (!this.state.submitted) {
      return <div className="contactSection"><b><h1>Enter your email, and lets get to it.</h1></b>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <p>
                  <input
                    type="text"
                    value={this.state.text}
                    onChange={(event) => this.handleChange(event)} />
                </p>
                <br></br>
             </form>
             </div>
   } else {
     return <div className="contactSection"><b><h1>Your Email has been submitted!</h1></b> </div>
   }
  }



  render() {
    return (
      <div>
        {this.checkSubmit()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    emails: state.emailReducer.emails
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addEmail,
    fetchEmails,
    updateEmail,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);
