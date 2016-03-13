'use strict';

/**
 * @ngdoc function
 * @name reposApp.controller:ReposCtrl
 * @description
 * # ReposCtrl
 * Controller of the reposApp
 */
angular.module('reposApp')
  .controller('ReposCtrl', function($scope, GitHubRepos) {
    $scope.repos = [];
    $scope.developer = 'christoffee';
    GitHubRepos.getRepos($scope.developer).then(function(response) {
        $scope.repos = response;
    });
  });
