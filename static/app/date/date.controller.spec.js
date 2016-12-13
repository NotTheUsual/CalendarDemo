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

    localStorage.clear();
  }));
  
  function setupController() {
    $stateParams.year = $stateParams.year || 2017;
    $stateParams.month = $stateParams.month || 5;
    $stateParams.date = $stateParams.date || 2;
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

  it('can start editing the appointment', function() {
    setupController();
    $scope.day.appointment = null;
    expect($scope.newAppointment).toBeNull();
    $scope.edit();
    expect($scope.newAppointment).toEqual({text: null});
  });

  it('can start editing the appointment (with existing text)', function() {
    setupController();
    $scope.day.appointment = 'Doctor';
    $scope.edit();
    expect($scope.newAppointment).toEqual({text: 'Doctor'});
  });

  it('can cancel editing the appointment', function() {
    setupController();
    $scope.newAppointment = {text: 'mistake'};
    $scope.cancelEdit();
    expect($scope.newAppointment).toBeNull();
  });

  it('can save the appointment', function() {
    setupController();
    expect($scope.day.appointment).toBeNull();
    $scope.newAppointment = {text: 'Thing'};

    $scope.saveAppointment('Thing');

    expect($scope.day.appointment).toEqual('Thing');
    expect(localStorage['2017/5/2']).toEqual('Thing');
    expect($scope.newAppointment).toBeNull();
  });

  it('can delete an appointment', function() {
    localStorage.setItem('2017/5/2', 'Old');
    setupController();
    expect($scope.day.appointment).toEqual('Old');

    $scope.delete();

    expect($scope.day.appointment).toBeNull();
    expect(localStorage['2017/5/2']).toBeUndefined();
  });

  it('can close the date view', function() {
    spyOn($state, 'go');
    setupController();

    $scope.close();

    expect($state.go).toHaveBeenCalledWith('month');
  });

  afterEach(function() {
    window.localStorage.clear();
  });
});

