const React = require('react');
const FillerText = require('../components/FillerText');

class WebPage extends React.Component {
  render() {
    return(
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    );
    }
  }

module.exports = WebPage;
