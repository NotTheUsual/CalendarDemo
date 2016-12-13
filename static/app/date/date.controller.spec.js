describe('DateController', function() {
  var $controller, $log, $q, $rootScope, $scope, $state, $stateParams, $timeout, CalendarDate, ctrl;
  
  beforeEach(module('calendar.controllers', 'ui.router'));

  beforeEach(inject(function(_$controller_, _$log_, _$q_, _$rootScope_, _$state_, _$stateParams_, _$timeout_, _CalendarDate_) {
    $controller = _$controller_;
    $log = _$log_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $state = _$state_;
    $stateParams = _$stateParams_;
    $timeout = _$timeout_;

    CalendarDate = _CalendarDate_;
  }));
  
  function setupController() {
    ctrl = $controller('DateController', {$scope: $scope, $state: $state, $stateParams: $stateParams, CalendarDate: CalendarDate});
  }

  it('can set up the day', function() {
    $stateParams.year = 2017;
    $stateParams.month = 5;
    $stateParams.date = 2;
    setupController();
    expect($scope.day.year).toEqual(2017);
    expect($scope.day.month).toEqual(5);
    expect($scope.day.date).toEqual(2);
    expect($scope.day.monthName).toEqual('June');
  });

  it('can close the date view', function() {
    spyOn($state, 'go');
    setupController();

    $scope.close();

    expect($state.go).toHaveBeenCalledWith('month');
  });
});

