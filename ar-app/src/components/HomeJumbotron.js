import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import SearchInput from './BookSearchInput.js';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <p className="display-4">Discover your favourite authors and books</p>
          <SearchInput/>
        </Container>
        <div className="header-book">
       <span>Still from:</span> Before She was Harriet by Lesa Cline-Ransome Author <br/>
        & James E. Ransome Illustrator
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;