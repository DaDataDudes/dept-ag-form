(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/webpack_react/webpack.config.js                                                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var weight = 100;                                                                                               // 1
                                                                                                                // 2
function dependencies() {                                                                                       // 3
  return {                                                                                                      // 4
    dependencies: {                                                                                             // 5
      'react': '^15.0.0',                                                                                       // 6
      'react-dom': '^15.0.0',                                                                                   // 7
      'react-addons-pure-render-mixin': '^15.0.0'                                                               // 8
    },                                                                                                          // 9
    devDependencies: {                                                                                          // 10
      'babel': '^6.3.26',                                                                                       // 11
      'babel-core': '^6.3.26',                                                                                  // 12
      'babel-loader' : '^6.2.0',                                                                                // 13
      'babel-preset-react': '^6.3.13',                                                                          // 14
      'babel-preset-es2015': '^6.3.13',                                                                         // 15
      'babel-preset-stage-0': '^6.3.13',                                                                        // 16
      'babel-plugin-transform-decorators-legacy': '^1.3.2',                                                     // 17
      'babel-plugin-add-module-exports': '^0.1.2',                                                              // 18
      'babel-plugin-react-transform': '^2.0.0',                                                                 // 19
      'expose-loader': '^0.7.1',                                                                                // 20
      'react-transform-hmr' : '^1.0.1',                                                                         // 21
      'react-transform-catch-errors': '^1.0.0',                                                                 // 22
      'redbox-react': '^1.2.0'                                                                                  // 23
    }                                                                                                           // 24
  };                                                                                                            // 25
}                                                                                                               // 26
                                                                                                                // 27
function config(settings, require) {                                                                            // 28
  var fs = require('fs');                                                                                       // 29
  var path = require('path');                                                                                   // 30
  var babelSettings = {};                                                                                       // 31
  var tsConfig = {};                                                                                            // 32
                                                                                                                // 33
  var CWD = path.resolve('./');                                                                                 // 34
                                                                                                                // 35
  if (fs.existsSync(CWD + '/.babelrc')) {                                                                       // 36
    var babelrc = fs.readFileSync(CWD + '/.babelrc');                                                           // 37
    babelSettings = JSON.parse(babelrc);                                                                        // 38
  }                                                                                                             // 39
                                                                                                                // 40
  if (fs.existsSync(CWD + '/tsconfig.json')) {                                                                  // 41
    var tsConfigData = fs.readFileSync(CWD + '/tsconfig.json');                                                 // 42
    tsConfig = JSON.parse(tsConfigData);                                                                        // 43
  }                                                                                                             // 44
                                                                                                                // 45
  if (!tsConfig.compilerOptions) {                                                                              // 46
    tsConfig.compilerOptions = {};                                                                              // 47
  }                                                                                                             // 48
                                                                                                                // 49
  if (typeof tsConfig.compilerOptions.target === 'undefined') { tsConfig.compilerOptions.target = 'es6'; }      // 50
  if (typeof tsConfig.compilerOptions.jsx === 'undefined') { tsConfig.compilerOptions.jsx = 'react'; }          // 51
  if (typeof tsConfig.compilerOptions.sourceMap === 'undefined') { tsConfig.compilerOptions.sourceMap = true; }
  if (typeof tsConfig.compilerOptions.experimentalDecorators === 'undefined') { tsConfig.compilerOptions.experimentalDecorators = true; }
  if (typeof tsConfig.compilerOptions.module === 'undefined') { tsConfig.compilerOptions.module = 'commonjs'; }
                                                                                                                // 55
  if (!tsConfig.exclude) { tsConfig.exclude = []; }                                                             // 56
  if (tsConfig.exclude.indexOf('node_modules') < 0) { tsConfig.exclude.push('node_modules'); }                  // 57
  if (tsConfig.exclude.indexOf('.meteor') < 0) { tsConfig.exclude.push('.meteor'); }                            // 58
                                                                                                                // 59
  if (!babelSettings.presets) {                                                                                 // 60
    babelSettings.presets = [];                                                                                 // 61
  }                                                                                                             // 62
                                                                                                                // 63
  if (!babelSettings.plugins) {                                                                                 // 64
    babelSettings.plugins = [];                                                                                 // 65
  }                                                                                                             // 66
                                                                                                                // 67
  if (babelSettings.presets.indexOf('react') < 0) {                                                             // 68
    babelSettings.presets.push('react');                                                                        // 69
  }                                                                                                             // 70
                                                                                                                // 71
  if (babelSettings.presets.indexOf('es2015') < 0) {                                                            // 72
    babelSettings.presets.push('es2015');                                                                       // 73
  }                                                                                                             // 74
                                                                                                                // 75
  if (babelSettings.presets.indexOf('stage-0') < 0 &&                                                           // 76
      babelSettings.presets.indexOf('stage-1') < 0 &&                                                           // 77
      babelSettings.presets.indexOf('stage-2') < 0 &&                                                           // 78
      babelSettings.presets.indexOf('stage-3') < 0) {                                                           // 79
    babelSettings.presets.push('stage-0');                                                                      // 80
  }                                                                                                             // 81
                                                                                                                // 82
  if (settings.babel && settings.babel.plugins) {                                                               // 83
    babelSettings.plugins = babelSettings.plugins.concat(settings.babel.plugins);                               // 84
  }                                                                                                             // 85
                                                                                                                // 86
  if (babelSettings.plugins.indexOf('transform-decorators-legacy') < 0) {                                       // 87
    babelSettings.plugins.push('transform-decorators-legacy');                                                  // 88
  }                                                                                                             // 89
                                                                                                                // 90
  if (babelSettings.plugins.indexOf('add-module-exports') < 0) {                                                // 91
    babelSettings.plugins.push('add-module-exports');                                                           // 92
  }                                                                                                             // 93
                                                                                                                // 94
  if (settings.isDebug && settings.platform !== 'server' && !IS_TEST) {                                         // 95
    var transforms = [{                                                                                         // 96
      transform: 'react-transform-hmr',                                                                         // 97
      imports: ['react'],                                                                                       // 98
      locals: ['module']                                                                                        // 99
    }];                                                                                                         // 100
                                                                                                                // 101
    if (settings.babel && !settings.babel.disableRedbox) {                                                      // 102
      transforms.push({                                                                                         // 103
        transform: 'react-transform-catch-errors',                                                              // 104
        imports: ['react', 'redbox-react']                                                                      // 105
      });                                                                                                       // 106
    }                                                                                                           // 107
                                                                                                                // 108
    babelSettings.plugins.push(['react-transform', { transforms: transforms }]);                                // 109
  }                                                                                                             // 110
                                                                                                                // 111
  var usingMeteorReact = settings.packages.indexOf('react-runtime') >= 0;                                       // 112
  var extensions = ['.js', '.jsx'];                                                                             // 113
  var loaders = [                                                                                               // 114
    { test: /\/node_modules\/react\/react\.js$/, loader: 'expose?React' },                                      // 115
    { test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /\.meteor|node_modules/ }                // 116
  ];                                                                                                            // 117
                                                                                                                // 118
  if (settings.packages.indexOf('webpack:typescript') >= 0) {                                                   // 119
    loaders.push({ test: /\.tsx$/, loader: 'babel?' + JSON.stringify(babelSettings) + '!ts?' + JSON.stringify(tsConfig), exclude: /\.meteor|node_modules/ });
    extensions.push('.tsx');                                                                                    // 121
  }                                                                                                             // 122
                                                                                                                // 123
  var externals = {};                                                                                           // 124
                                                                                                                // 125
  if (settings.isTest || settings.isAppTest) {                                                                  // 126
    // Support for Enzyme                                                                                       // 127
    externals['react/addons'] = true;                                                                           // 128
    externals['react/lib/ExecutionEnvironment'] = true;                                                         // 129
    externals['react/lib/ReactContext'] = true;                                                                 // 130
  }                                                                                                             // 131
                                                                                                                // 132
  return {                                                                                                      // 133
    loaders: loaders,                                                                                           // 134
    extensions: extensions,                                                                                     // 135
    externals: externals                                                                                        // 136
  };                                                                                                            // 137
}                                                                                                               // 138
                                                                                                                // 139
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['webpack:react'] = {};

})();
