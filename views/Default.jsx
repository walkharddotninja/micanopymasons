'use strict';

const React = require('react');

const Default = React.createClass({
  render: function() {
    return(

      <html lang="en">
        <head>
          <title> Micanopy Masonic Lodge No. 29 </title>
          <meta charSet="UTF-8"></meta>
          <meta http-equiv="X-UA-Compatible" content="ID=edge,chrome=1"></meta>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"></meta>
          <link type="image/jpg" rel="icon" href="assets/favicon.jpg"></link>
          <link type="text/css" rel="stylesheet" href="assets/default.css"></link>
        </head>
        <body>
          <header></header>
          <main></main>
          <footer></footer>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/js/foundation.min.js"></script>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
        </body>
      </html>

    )
  }
});

module.exports = Default;
