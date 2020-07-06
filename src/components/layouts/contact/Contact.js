import React, { Component } from 'react'
import './Contact.css'
import { Button, Input } from 'semantic-ui-react'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      phoneNumber: ''
    };
    this.updateField = this.updateField.bind(this);
    this.addContactUs = this.addContactUs.bind(this);
  }
  addContactUs() {
    const {actions} = this.props
    actions.addContactUs(this.state);
    window.location.href = "/"
  }
  updateField(field, value) {
    this.setState({ [field]: value });
  }
  render() {
    return (
      <div className="form-container">
        <form className="ui form contact-form">
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">

                <Input control='input' name="first-name" placeholder="First Name"
                  onChange={(event) => this.updateField('firstName', event.target.value)}
                  value={this.state.firstName} />
              </div>
              <div className="field">
                <input type="text" name="last-name" placeholder="Last Name"
                  onChange={(event) => this.updateField('lastName', event.target.value)}
                  value={this.state.lastName} />
              </div>
            </div>
          </div>

          <div className="field">
            <label>E mail</label>
            <div className="fields">
              <div className="sixteen wide field">
                <Input control='input' name="e mail" placeholder="e mail"
                  onChange={(event) => this.updateField('email', event.target.value)}
                  value={this.state.email} />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Phone Number</label>
            <div className="fields">
              <div className="sixteen wide field">
                <Input control='input' name="phoneNumber" placeholder="Phone Number"
                  onChange={(event) => this.updateField('phoneNumber', event.target.value)}
                  value={this.state.phoneNumber} />
              </div>
            </div>
          </div>

          <div className="ui form" style={{marginBottom : '10px'}}>
            <div className="field">
              <label>Message</label>
              <textarea
                onChange={(event) => this.updateField('message', event.target.value)}
                value={this.state.message} />
            </div>
          </div>
          <div>
            <Button basic color='teal' type="button" onClick={this.addContactUs}>Contact Us</Button>
          </div>
        </form>
        <div className="ui centered card">
          <div className="content">
            <div className="center aligned header">Registered Office</div>
          </div>
          <div className="content">
            <h4 className="ui sub header">Taantrix Inc</h4>
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">
                    M I G 105,
                    4th Cross Road,
                    Navanagar
                    Hubballi,
                    Karnataka 580025<br />
                    Phone : +91 96 11 09 96 77<br />
                    e-mail : help@taantrix.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
