import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

//#41B3A3
const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1A1A1D';
  });
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/delete" component={StreamDelete} />
        </div>
      </Router>
    </div>
  );
};

export default App;
