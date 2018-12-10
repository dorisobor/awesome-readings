import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import SearchInput from './BookSearchInput.js';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <SearchInput/>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;