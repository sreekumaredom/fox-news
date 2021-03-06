import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Higher order components
// import WithSpinner from '../../components/with-spinner/with-spinner.component';

//Selectors
import { selectHomepageArticles } from '../../redux/homepage/homepage.selectors';

//Actions
import { setArticles } from '../../redux/homepage/homepage.actions.js';

//Components
import Directory from '../../components/directory/directory';

class HomePage extends React.Component {
  componentDidMount() {
    const { setArticles } = this.props;

    var url =
      'http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=fa03504e961340c8a3bfcdfb580cbc7f';

    var req = new Request(url);
    fetch(req)
      .then((res) => res.json())
      .then((news) => setArticles(news.articles));
  }

  render() {
    const { articles } = this.props;
    return <Directory articles={articles} />;
  }
}

const mapStateToProps = createStructuredSelector({
  articles: selectHomepageArticles,
});

const mapDispatchToProps = (dispatch) => ({
  setArticles: (articles) => dispatch(setArticles(articles)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
