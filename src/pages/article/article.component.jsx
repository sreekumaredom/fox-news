import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//CSS
import './article.styles.css';

//Selectors
import { selectArticle } from '../../redux/bookmarks/bookmarks.selectors.js';

const ArticlePage = ({ selectedArticle }) => {
  return (
    <div>
      <div className="page-container">
        <div className="article">
          <div className="article__img">
            <img src={`${selectedArticle.urlToImage}`} alt="" />
          </div>
          <div className="article__content">
            <h1>{selectedArticle.title}</h1>
            <p>By {selectedArticle.author}</p>
            <p>{selectedArticle.publishedAt}</p>
            <p>{selectedArticle.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedArticle: selectArticle,
});

export default connect(mapStateToProps)(ArticlePage);