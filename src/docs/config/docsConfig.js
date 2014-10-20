(function() {
  'use strict';

  angular.module('peculiar-docs').config(
    function($stateProvider, $urlRouterProvider) {

      //$urlRouterProvider.otherwise("/state1");
      $stateProvider
        .state('home', { url: "/", templateUrl: "src/views/home/home.tpl.html"})
        .state('docs', { url: "/docs", templateUrl: "src/views/docs/docs.tpl.html"});

    });
}());