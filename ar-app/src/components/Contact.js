import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class ContactPage extends Component {
  // set state for input
  constructor(props) {
    super(props);

    this.state = {
      recipient: "troyamber@live.com",
      subject: "",
      sendersEmail: "",
      text: ""
    };
  }
  // get the value from the input
  handleSubject = event => {
    this.setState({ subject: event.target.value });
  };

  handleSendersEmail = event => {
    this.setState({ sendersEmail: event.target.value });
  };

  handleText = event => {
    this.setState({ text: event.target.value });
  };

  sendEmail = event => {
    event.preventDefault();

    // fetch to the 4000 port
    fetch(
      `http://localhost:4000/send-email?recipient=${
        this.state.recipient
      }&from=${this.state.sendersEmail}&subject=${this.state.subject}&text=${
        this.state.text
      }`
    ).catch(event => console.log("error", event));
  };
  render() {
    return (
      <div className="contactWrapper">
        <h2 classname="contact-title">Need help? Send us an email!</h2>
        <div className="underline" />
        <Form onSubmit={this.sendEmail}>
          <FormGroup>
            <Label for="Subject">Subject</Label>
            <Input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.handleSubject}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Type your email"
              value={this.state.sendersEmail}
              onChange={this.handleSendersEmail}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              value={this.state.text}
              onChange={this.handleText}
            />
          </FormGroup>

          <Button type="submit" onClick={this.sendEmail}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactPage;
