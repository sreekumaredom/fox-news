import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Pages
import HomePage from './pages/homepage/homepage.component.jsx';
import ArticlePage from './pages/article/article.component.jsx';
import BookmarkPage from './pages/bookmarks/bookmarks.component.jsx';

//Components
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/article" component={ArticlePage} />
        <Route exact path="/bookmarks" component={BookmarkPage} />
      </Switch>
    </div>
  );
}

export default App;
