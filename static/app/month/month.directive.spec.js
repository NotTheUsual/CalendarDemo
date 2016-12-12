describe('month', function() {
  var $compile, $log, $q, $rootScope, parentScope, $scope, $state, $timeout, element,
      months;

  beforeEach(module('calendar.directives'));
  beforeEach(module('templateModule'));

  beforeEach(inject(function(_$compile_, _$log_, _$q_, _$rootScope_, _$timeout_, _months_) {
    $compile = _$compile_;
    $log = _$log_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    parentScope = $rootScope.$new();
    $timeout = _$timeout_;
    months = _months_;
  }));

  function generateElement() {
    element = $compile('<month></month>')(parentScope);
    element.scope().$apply();
    parentScope.$digest();
    $scope = element.scope();
  }

  it('can set up the scope with information about the current month', function() {
    generateElement();
    expect($scope.month).toEqual(months.infoAbout(new Date()));
  });

  it('can return a range for iterating over from a number', function() {
    generateElement();
    expect($scope.range(2)).toEqual([1,2]);
    expect($scope.range(4)).toEqual([1, 2, 3, 4]);
  });

  it('can get the day name for a given month date', function() {
    generateElement();
    var june = months.infoAbout(new Date(2016, 5));
    expect($scope.dayName(june, 5)).toEqual('Sunday')
  });
});
