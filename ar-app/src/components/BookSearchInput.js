import React, { Component } from 'react';
import {Form, FormGroup, Label, Input } from "reactstrap";



  class BookSearchInput extends Component  {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSearch"> Search </Label>{" "}
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search placeholder"
          />
        </FormGroup>
      </Form>
    );
  }
}
export default BookSearchInput;