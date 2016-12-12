describe('month', function() {
  var $compile, $log, $q, $rootScope, parentScope, $scope, $state, $timeout, element;

  beforeEach(module('calendar.directives'));
  beforeEach(module('templateModule'));

  beforeEach(inject(function(_$compile_, _$log_, _$q_, _$rootScope_, _$timeout_) {
    $compile = _$compile_;
    $log = _$log_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    parentScope = $rootScope.$new();
    $timeout = _$timeout_;
  }));

  function generateElement() {
    element = $compile('<month></month>')(parentScope);
    element.scope().$apply();
    parentScope.$digest();
    $scope = element.scope();
  }

  it('can set up the scope correctly', function() {
    generateElement();
    expect($scope.now.getDate()).toEqual((new Date()).getDate());
  });
});
