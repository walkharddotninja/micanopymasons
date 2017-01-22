(function() {
  angular.module('index', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '',
        views: {
          'header': { templateUrl: './modules/index/home/views/home.header.html' },
          'main': { templateUrl: './modules/index/home/views/home.main.html' },
          'footer': { templateUrl: './modules/index/home/views/home.footer.html' }
        },
        params: {}
      })
      .state('calendar', {
        url: '/calendar',
        views: {
          'header': {},
          'main': { templateUrl: './modules/index/calendar/views/calendar.main.html' },
          'footer': {}
        },
        params: {}
      })
      .state('links', {
        url: '/links',
        views: {
          'header': {},
          'main': { templateUrl: './modules/index/links/views/links.main.html' },
          'footer': {}
        },
        params: {}
      })
      .state('photos', {
        url: '/photos',
        views: {
          'header': {},
          'main': { templateUrl: './modules/index/photos/views/photos.main.html' },
          'footer': {}
        },
        params: {}
      })
      .state('officers', {
        url: '/officers',
        views: {
          'header': {},
          'main': { templateUrl: './modules/index/officers/views/officer.main.html' },
          'footer': {}
        },
        params: {}
      })
      .state('sitemap', {
        url: '/sitemap',
        views: {
          'header': {},
          'main': { templateUrl: './modules/index/sitemap/views/sitemap.main.html' },
          'footer': {}
        },
        params: {}
      });
      $urlRouterProvider.otherwise('');
  });
})();
