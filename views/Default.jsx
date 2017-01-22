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
        <body data-ng-app="app">
          <header data-ui-view="header"></header>
          <main data-ui-view="main"></main>
          <footer data-ui-view="footer"></footer>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/js/foundation.min.js"></script>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>
          <script type="text/javascript" src="modules/app.client.js"></script>
          <script type="text/javascript" src="modules/index/index.client.routes.js"></script>
          <script type="text/javascript" src="modules/index/calendar/client/calendar.client.main.controller.js"></script>
          <script type="text/javascript" src="modules/index/home/client/home.client.main.controller.js"></script>
          <script type="text/javascript" src="modules/index/links/client/links.client.main.controller.js"></script>
          <script type="text/javascript" src="modules/index/officers/client/officers.client.main.controller.js"></script>
          <script type="text/javascript" src="modules/index/photos/client/photos.client.main.controller.js"></script>
          <script type="text/javascript" src="modules/index/sitemap/client/sitemap.client.main.controller.js"></script>
        </body>
      </html>

    )
  }
});

module.exports = Default;
