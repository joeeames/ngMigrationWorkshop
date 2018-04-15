// Karma configuration
// Generated on Sat Apr 16 2016 16:47:26 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../public/vendor/jquery.min.js',
      '../public/vendor/1.6.3/angular.min.js',
      '../public/vendor/1.6.3/angular-route.min.js',
      '../public/vendor/1.6.3/angular-mocks.js',
      '../public/vendor/toastr.min.js',
      '../dist/dev/common.bundle.js',
      '../dist/dev/ng1.bundle.js',
      '../test/**/*.js'
    ],

    exclude: [
    ],

    reporters: ['mocha'],
    port: 9876,

    colors: true,
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,
    concurrency: Infinity
  })
}
