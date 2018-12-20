import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function ContactPage() {
  return (
    <div className="contactWrapper">
    <Form>

      <h2 classname="contact-title">Need help? Send us an email!</h2>
      <div className="underline" />
      <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        </Form>

    </div>
  );
}

export default ContactPage;