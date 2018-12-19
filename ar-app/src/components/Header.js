import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import SearchInput from './BookSearchInput.js';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h2 className="display-3">Lorem ipsum</h2>
          <SearchInput/>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;