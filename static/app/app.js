(function() {
  'use strict';

  angular.module('calendar.templates', []);
  angular.module('calendar.services', []);
  angular.module('calendar.directives', [
    'calendar.services',
    'calendar.templates'
  ]);
  angular.module('calendar.controllers', [
    'calendar.services',
    'calendar.directives',
    'calendar.templates'
  ]);

})();
