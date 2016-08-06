(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/webpack_css/webpack.config.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var weight = 200;                                                      // 1
                                                                       // 2
function dependencies(settings) {                                      // 3
  return {                                                             // 4
    devDependencies: {                                                 // 5
      'style-loader' : '^0.13.0',                                      // 6
      'css-loader': '^0.23.0',                                         // 7
      'extract-text-webpack-plugin': '^0.9.1'                          // 8
    }                                                                  // 9
  };                                                                   // 10
}                                                                      // 11
                                                                       // 12
function config(settings, require) {                                   // 13
  var cssLoader = '';                                                  // 14
  var loaders = [];                                                    // 15
  var plugins = [];                                                    // 16
                                                                       // 17
  var queries = settings.css || {};                                    // 18
                                                                       // 19
  // Support old setting                                               // 20
  if (queries.module) {                                                // 21
    queries.modules = queries.module;                                  // 22
    delete queries.module;                                             // 23
  }                                                                    // 24
                                                                       // 25
  if (!queries.localIdentName) {                                       // 26
    queries.localIdentName = '[name]__[local]__[hash:base64:5]';       // 27
  }                                                                    // 28
                                                                       // 29
  if (settings.isDebug) {                                              // 30
    if (settings.platform === 'server') {                              // 31
      settings.cssLoader = 'css/locals?' + JSON.stringify(queries);    // 32
    } else {                                                           // 33
      settings.cssLoader = 'style!css?' + JSON.stringify(queries);     // 34
    }                                                                  // 35
  } else {                                                             // 36
    if (settings.platform === 'server') {                              // 37
      settings.cssLoader = 'css/locals?' + JSON.stringify(queries);    // 38
    } else {                                                           // 39
      settings.cssLoader = 'css?' + JSON.stringify(queries);           // 40
      settings.cssExtract = true;                                      // 41
    }                                                                  // 42
  }                                                                    // 43
                                                                       // 44
  var cssLoader = settings.cssLoader;                                  // 45
                                                                       // 46
  if (settings.cssExtract) {                                           // 47
    var ExtractTextPlugin = require('extract-text-webpack-plugin');    // 48
    plugins.push(new ExtractTextPlugin('style.css'));                  // 49
    cssLoader = ExtractTextPlugin.extract('style', cssLoader);         // 50
  }                                                                    // 51
                                                                       // 52
  // Let postcss control CSS files if it is there                      // 53
  if (cssLoader && settings.packages.indexOf('webpack:postcss') < 0) {
    loaders.push({ test: /\.css$/, loader: cssLoader });               // 55
  }                                                                    // 56
                                                                       // 57
  return {                                                             // 58
    loaders: loaders,                                                  // 59
    plugins: plugins,                                                  // 60
    extensions: ['.css']                                               // 61
  };                                                                   // 62
}                                                                      // 63
                                                                       // 64
/////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['webpack:css'] = {};

})();
