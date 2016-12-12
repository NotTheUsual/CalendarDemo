module.exports = function(config) {
  config.set({

    basePath: '..',

    frameworks: ['jasmine', 'sinon'],

    files: [
      'test/vendor/angular.min.js',
      'test/vendor/angular-mocks.js',
      'test/vendor/angular-ui-router.min.js',
      'static/app/js/app.js',
      'static/app/**/*.js',
      'static/app/**/*.html'
    ],

    exclude: [
    ],

    preprocessors: {
      'static/app/**/!*.spec.js': ['coverage'],
      'static/app/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templateModule'
    },

    reporters: ['spec', 'coverage', 'osx'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html'},
        { type: 'text-summary' }
      ]
    },

    osxReporter: {
      notificationMode: 'failChange'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  })
}
