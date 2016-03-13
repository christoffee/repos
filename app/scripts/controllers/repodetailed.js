'use strict';

/**
 * @ngdoc function
 * @name reposApp.controller:RepodetailedCtrl
 * @description
 * # RepodetailedCtrl
 * Controller of the reposApp
 */
angular.module('reposApp')
  .controller('RepoDetailedCtrl', function ($scope, $routeParams, GitHubRepos) {
    $scope.title = $routeParams.reponame;
    $scope.details = _.filter(GitHubRepos.repos, function(repo) {
        return $scope.title === repo.name;
    })[0];

  });
