import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
    render : function () {
    return (
      <div className="app">
        <h1>Testing the app</h1>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('#main'));
