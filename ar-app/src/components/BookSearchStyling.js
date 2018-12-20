import React, { Component } from 'react';


// class SearchGallery extends Component{
//     render(){
//         return (
//             <div classname="book-results">
//             {
//                 this.props.items.map((item , i) => {
//                     let {title, imageLinks , infoLink} = item.volumeInfo
//                     return (
//                         <a href ={infoLink}
//                         target = "_blank"
//                         rel="noopener noreferrer"
//                         key={i} className ="book">
//                         <img
//                         src ={imageLinks !== undefined? imageLinks.thumbnail : ''}
//                         alt ={title}
//                         className = "bookImage"
//                         />
//                         <div className="titleText">{title}</div>

//                         </a>

//                     );
//                 })
//             }</div>

//         );
//     }
// }


class SearchGallery extends Component{
    render(){
        return (
            <div className="booksearch">
            {
                this.props.items.map((item) => {
                    let {title, imageLinks , infoLink, id} = item.volumeInfo
                    return (
                        <ul className="book-search-list">
                        <li key={id}>
                        <a href ={infoLink}
                        target = "_blank"
                        rel="noopener noreferrer"
                        key={id} className ="book">
                        <img
                        // src ={imageLinks !== undefined? imageLinks.thumbnail : ''}
                        src ={imageLinks.thumbnail}
                        alt ={title}
                        className = "bookImage"
                        />
                       <p>{title}</p>

                        </a>
                       </li>
                     </ul>
                    );
                })
            }
            </div>

        );
    }
}



export default SearchGallery;