'use strict';

const React = require('react');

const Default = React.createClass({
  render: function() {
    return(
      <html lang="en">
        <head>
          <title> REACT TEST </title>

          <meta charSet="UTF-8"></meta>
          <meta http-equiv="X-UA-Compatible" content="ID=edge,chrome=1"></meta>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"></meta>

          <link type="text/css" rel="stylesheet" href="./../../index.css"></link>
        </head>

        <body>
          <h1> Hello, World! </h1>
        </body>
      </html>
    )
  }
});

module.exports = Default;
