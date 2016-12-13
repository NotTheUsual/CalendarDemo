describe('month', function() {
  var $compile, $log, $q, $rootScope, parentScope, $scope, $state, $timeout, element,
      months;

  beforeEach(module('calendar.directives', 'ui.router'));
  beforeEach(module('templateModule'));

  beforeEach(inject(function(_$compile_, _$log_, _$q_, _$rootScope_, _$state_, _$timeout_, _months_) {
    $compile = _$compile_;
    $log = _$log_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    parentScope = $rootScope.$new();
    $state = _$state_;
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
    spyOn($state, 'go');
    generateElement();
    $scope.showDay({year: 2050, month: 11, date: 3});
    expect($state.go).toHaveBeenCalledWith('date', {year: 2050, month: 11, date: 3});
  });

  it('will not show detail for a day in the past', function() {
    spyOn($state, 'go');
    generateElement();
    $scope.showDay({year: 1950, month: 11, date: 3, isInPast: true});
    expect($state.go).not.toHaveBeenCalled();
  });
});
