import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";

class ContactPage extends Component {

  // set state for input
  constructor(props) {
    super(props);

  this.state= {
    recipient: 'troyamber@live.com',
    subject:'',
    sendersEmail: '',
    text:''
  };
}

sendEmail = event => {
  event.preventDefault();


    fetch(`http://127.0.0.1:4000/send-email?recipient=${this.state.recipient}&sender=${this.state.sendersEmsil}&topic=${this.state.subject}&text=${this.state.text}`)
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div className="contactWrapper">
        <h2 classname="contact-title">Need help? Send us an email!</h2>
        <div className="underline" />
        <Form onSubmit={this.sendEmail}>
        <FormGroup>
              <Label for="Subject">Subject</Label>
              <Input type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.setState.subject}
              />
            </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Type your email"
              value={this.state.sendersEmail}
              onChange={this.setState.sendersEmail}

            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea"
            name="text"
            id="exampleText"
            value={this.state.text}
            onChange={this.setState.text}

            />
          </FormGroup>

          <Button type="submit"
          value={this.sendEmail}>
          Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactPage;
