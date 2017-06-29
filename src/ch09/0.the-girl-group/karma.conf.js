module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'Firefox'],
    frameworks: ['jasmine'],
    reporters: ['dots'],
    singleRun: true,
    files: [
      "node_modules/typescript/lib/typescript.js",
      "node_modules/reflect-metadata/Reflect.js",
      "node_modules/systemjs/dist/system.src.js",
      "node_modules/zone.js/dist/zone.js",
      "node_modules/zone.js/dist/async-test.js",
      "node_modules/zone.js/dist/fake-async-test.js",
      "node_modules/zone.js/dist/long-stack-trace-zone.js",
      "node_modules/zone.js/dist/proxy.js",
      "node_modules/zone.js/dist/sync-test.js",
      "node_modules/zone.js/dist/jasmine-patch.js",

      { pattern: 'karma-systemjs.config.js', included: true, watched: false },
      { pattern: 'karma-test-runner.js', included: true, watched: false },

      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
      { pattern: 'client/app/**/*.ts', included: false, watched: true },
      { pattern: 'client/app/**/*.html', included: false, watched: true }
    ],
    proxies: {
      '/app/': '/base/client/app'
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ]
  })
};
