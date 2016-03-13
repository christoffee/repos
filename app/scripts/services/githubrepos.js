'use strict';

/**
 * @ngdoc service
 * @name reposApp.GitHubRepos
 * @description
 * # GitHubRepos
 * Service in the reposApp.
 */
angular.module('reposApp')
  .factory('GitHubRepos', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // 'https://api.github.com/users/christoffee/repos'

    return $resource('https://api.github.com/users/:developer/repos', {developer:'@developer'},{
        get: {method: 'get', isArray: true}
    });
  });
