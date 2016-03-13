'use strict';

describe('Controller: RepodetailedCtrl', function () {

  // load the controller's module
  beforeEach(module('reposApp'));

  var RepodetailedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepodetailedCtrl = $controller('RepodetailedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepodetailedCtrl.awesomeThings.length).toBe(3);
  });
});
