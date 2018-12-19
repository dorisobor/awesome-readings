import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button,InputGroupAddon, InputGroup } from "reactstrap";
// import _ from 'lodash';
import axios from 'axios';
import SearchGallery from './BookSearchStyling.js';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";


library.add(faSearch);
dom.watch();


class BookSearchInput extends Component {
  // set state for input
  constructor(props) {
    super(props);

  this.state= {
    bookSearch:'',
    items : [],
    error:''
  };
}
// get the value from the input
// handleChange = event => {

//   this.setState({ bookSearch: event.target.value.toLowerCase()  })
//     if (this.state.bookSearch && this.state.bookSearch.length > 1) {

//         this.handleSubmit(event)

//     }

// };


handleChange = event => {
    this.setState({ bookSearch: event.target.value.toLowerCase()})
    this.setState({ error:''});

  if (this.state.bookSearch.length > 1) {

        this.handleSubmit(event)
    }
}


// fetch the api
  handleSubmit= event => {
    event.preventDefault();
    if (this.state.bookSearch === '') {
      this.setState({ items:[]});
      this.setState({ error: "Please enter a book title" });
     } else {
     const apiKey = `key=AIzaSyBVCp_8psinPwlj2pRTHpQnj3tWqBZbuBg`;
     const url = `https://www.googleapis.com/books/v1/volumes?q=title:${this.state.bookSearch}&${apiKey}`;
    fetch(url, {method:"GET"})
    .then(response =>  response.json())
    .then(json => {
      let {items} = json;
      this.setState({
        items : items
      })

    })
    console.log("you searched for" , this.state.bookSearch);
  }
}
    // .catch(e => console.log('error', e));


  render() {

    //if its in an error state then display the error message
    // make the errorMessage variable empty so it can change to the message
    let errorMessage = null;
    if (this.state.error) {
      errorMessage = <p>{this.state.error}</p>;
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit}
          className="form">
          <FormGroup>
            <InputGroup>

              <Input
                type="search"
                name="BookSearchInput"
                id="BookSearchInput"
                placeholder="Find a book"
                value={this.state.bookSearch}
                onChange={this.handleChange}
              />
              <InputGroupAddon addonType="append">
                <Button type="submit" value={this.handleSubmit}> <i className="fas fa-search"></i>
                </Button>


              </InputGroupAddon>

            </InputGroup>


            <SearchGallery items={this.state.items} />

          </FormGroup>

        </Form>
        <p className="text-danger">{errorMessage}</p>
      </div>
    );
  }
}
export default BookSearchInput;