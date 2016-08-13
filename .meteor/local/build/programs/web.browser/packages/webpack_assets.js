(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

(function(){

//////////////////////////////////////////////////////////////////////////
//                                                                      //
// packages/webpack_assets/webpack.config.js                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
                                                                        //
var weight = 999;                                                       // 1
                                                                        // 2
function dependencies() {                                               // 3
  return {                                                              // 4
    devDependencies: {                                                  // 5
      'url-loader': '^0.5.7',                                           // 6
      'file-loader': '^0.8.5'                                           // 7
    }                                                                   // 8
  };                                                                    // 9
}                                                                       // 10
                                                                        // 11
function config(settings) {                                             // 12
  var ext = 'svg|ttf|woff2?|eot';                                       // 13
                                                                        // 14
  if (settings.assets && settings.assets.extensions) {                  // 15
    ext += '|' + settings.assets.extensions.join('|');                  // 16
  }                                                                     // 17
                                                                        // 18
  return {                                                              // 19
    loaders: [                                                          // 20
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=' + ((settings.assets && settings.assets.limit) ? settings.assets.limit : 8182) },
      { test: new RegExp('\\.(' + ext + ')(\\?.*)?$'), loader: 'file' }
    ]                                                                   // 23
  };                                                                    // 24
}                                                                       // 25
                                                                        // 26
//////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['webpack:assets'] = {};

})();
