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
    spyOn(months, 'infoAbout').and.returnValue({name: 'December', days: []});
    generateElement();

    var monthInfo = months.infoAbout(new Date());
    expect($scope.month).toEqual(monthInfo);
  });

  it('can show detail for a day', function() {
    generateElement();
    expect($scope.focussedDay).toEqual(null);
    $scope.showDay({id: 5});
    expect($scope.focussedDay).toEqual({id: 5});
  });

  it('can hide detail for a day', function() {
    generateElement();
    $scope.focussedDay = {id: 5}
    $scope.hideDay();
    expect($scope.focussedDay).toEqual(null);
  });
});
