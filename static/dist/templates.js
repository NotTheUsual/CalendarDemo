angular.module('calendar.templates').run(['$templateCache', function($templateCache) {$templateCache.put('static/app/root/root.controller.html','<month></month>');
$templateCache.put('static/app/date/date.controller.html','<section class="day">\n  <h3 class="day-monthname">{{day.monthName}}</h3>\n  <h2 class="day-title">\n    <span class="day-weekday">{{day.weekday}}</span> <span class="day-date">{{day.date}}</span>\n  </h2>\n  <p class="day-appointment" ng-if="!newAppointment">{{day.appointment || \'Nothing scheduled\'}}</p>\n  <button class="day-button" ng-if="!newAppointment" ng-click="edit()">Edit</button>\n  <form ng-show="!!newAppointment">\n    <input type="text" placeholder="New Appointment" class="day-input" ng-model="newAppointment.text" />\n    <button class="day-button" ng-click="cancelEdit()">Cancel</button>\n    <button class="day-button" ng-click="saveAppointment(newAppointment.text)">Save</button>\n  </form>\n</section>\n\n<button class="back-button" ng-click="close()">Back</button>\n');
$templateCache.put('static/app/month/month.directive.html','<h2 class="month-name">{{month.name}}</h2>\n<ul class="month-days">\n  <li class="month-day-header">Monday</li>\n  <li class="month-day-header">Tuesday</li>\n  <li class="month-day-header">Wednesday</li>\n  <li class="month-day-header">Thursday</li>\n  <li class="month-day-header">Friday</li>\n  <li class="month-day-header">Saturday</li>\n  <li class="month-day-header">Sunday</li>\n</ul>\n<ul class="month-days offset-{{month.startDay}}">\n  <li class="month-day"\n      ng-repeat="day in month.days"\n      ng-class="{\'past\': day.isInPast}"\n      ng-click="showDay(day)">\n    <span class="month-day-weekday">{{day.weekday}}</span> <span class="month-day-date">{{day.date}}</span>\n    <p class="month-day-appointment" ng-if="!!day.appointment">{{day.appointment}}</p>\n  </li>\n</ul>\n');}]);