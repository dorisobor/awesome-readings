import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import InfoBookPage from './InfoBookPage'
class SearchGallery extends Component {
  render() {
    return (
      <div className="booksearch">
        {this.props.items.map(items => {
          let { title, imageLinks } = items.volumeInfo;
          return (
            <ul className="book-search-list">
              <li key={items.id}>
                <button className="book-button">
                  <Link
                    to={items.id}>
                    <img
                      src={imageLinks.thumbnail}
                      alt={title}
                      className="bookImage"
                    />
                    <p>{title}</p>
                  </Link>

                </button>

              </li>
            </ul>

          );

        })}
      <Route path="/id" component={InfoBookPage}/>

      </div>
    );
  }
}

export default SearchGallery;
