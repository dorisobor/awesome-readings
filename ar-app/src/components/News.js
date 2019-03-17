import React, { Component } from 'react';
import NewsArticles from './data/articles.json'
class News extends Component {
  render() {
    return (
     <div className="news-articles">

     {NewsArticles.map((articleDetails, index) => {
      return  <div>
      <h2>{articleDetails.title} </h2>
     <img className="article-image" src={articleDetails.image} alt="article photograph"/>
     <div className="text-article"dangerouslySetInnerHTML={{__html:articleDetails.text}}/>
     </div>
     })}
      </div>

    );
  }
}
export default News;