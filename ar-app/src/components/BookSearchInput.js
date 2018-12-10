import React, { Component } from 'react';
import {Form, FormGroup, Label, Input } from "reactstrap";
import Request from 'superagent-es6-promise';



Request.get('https://www.googleapis.com/books/v1/volumes?q=harry%20potter')
.then(response => console.log(response.body))
.catch(error =>  console.log(error))


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