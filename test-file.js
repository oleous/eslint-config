import React from 'react';
import ReactDOM from 'react-dom';

export default class Test extends React.Component {
  render() {
    return (
      <p className="lead">
        Hello, world!
      </p>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('test'));
