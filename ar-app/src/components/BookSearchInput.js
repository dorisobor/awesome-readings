import React, { Component } from 'react';
import {Form, FormGroup, Label, Input } from "reactstrap";
// import _ from 'lodash';
// import axios from 'axios';
import SearchGallery from './BookSearchStyling.js';

class BookSearchInput extends Component {
  // set state
  constructor(props) {
    super(props);

  this.state= {
    bookTitleSearch:'',
    items : []
  };
}
  // get the value from the input
  handleChange = event => {
    this.setState({ bookTitleSearch: event.target.value });
  };


  handleSubmit= event => {
    event.preventDefault();
     const url = `https://www.googleapis.com/books/v1/volumes?q=title:${this.state.bookTitleSearch}`;
    fetch(url, {method:"GET"})
    .then(response =>  response.json())
    .then(json => {
      let {items} = json;
      this.setState({
        items : items
      })

    })

    // .catch(e => console.log('error', e));
    console.log("clicked on search  button" , this.state.bookTitleSearch);

}

render() {


    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleSearch"> Search </Label>{" "}
          <Input
            type="search"
            name="BookSearchInput"
            id="BookSearchInput"
            placeholder="search placeholder"
            value={this.state.BookSearchInput}
            onChange={this.handleChange}
          />
        </FormGroup>
      </Form>
      <SearchGallery items={this.state.items} />

     </div>
    );
  }
}
export default BookSearchInput;