'use strict';

/**
 * @ngdoc service
 * @name reposApp.GitHubRepos
 * @description
 * # GitHubRepos
 * Service in the reposApp.
 */
angular.module('reposApp')
  .service('GitHubRepos', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // 'https://api.github.com/users/christoffee/repos'

    var model = this;

    model.repos = [];

    model.getRepos = function(developer) {
        return  $http.get('https://api.github.com/users/' + developer + '/repos').then(function(response) {
            model.repos = response.data;

            return model.repos;
        });
    };
  });
