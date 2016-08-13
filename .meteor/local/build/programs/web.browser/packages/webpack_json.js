(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/webpack_json/webpack.config.js                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var weight = 500;                                                    // 1
                                                                     // 2
function dependencies(settings) {                                    // 3
  return {                                                           // 4
    devDependencies: {                                               // 5
      'json-loader' : '^0.5.4'                                       // 6
    }                                                                // 7
  };                                                                 // 8
}                                                                    // 9
                                                                     // 10
function config() {                                                  // 11
  return {                                                           // 12
    loaders: [{ test: /\.json$/, loader: 'json' }],                  // 13
    extensions: ['.json']                                            // 14
  };                                                                 // 15
}                                                                    // 16
                                                                     // 17
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['webpack:json'] = {};

})();
