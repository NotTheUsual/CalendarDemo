(function() {
  'use strict';

  angular.module('calendar.templates', []);
  angular.module('calendar.directives', ['calendar.templates']);
  angular.module('calendar.controllers', [
    'calendar.directives',
    'calendar.templates'
  ]);

})();
