//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Reload = Package.reload.Reload;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"webpack:reload":{"reload.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/webpack_reload/reload.js                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Package['velocity:core']) {                                      // 1
  Meteor.call('velocity/isMirror', function (err, isMirror) {        // 2
    // Don't run with Velocity mirror                                //
    if (isMirror) {                                                  // 4
      return;                                                        // 5
    }                                                                //
                                                                     //
    patchReload();                                                   // 8
  });                                                                //
} else if (!Meteor.isTest && !Meteor.isAppTest) {                    //
  patchReload();                                                     // 11
}                                                                    //
                                                                     //
function patchReload() {                                             // 14
  // Never reload the page, Hot Module Replacement don't need to     //
  Reload._onMigrate(function () {                                    // 16
    return [false];                                                  // 17
  });                                                                //
                                                                     //
  Meteor.startup(function () {                                       // 20
    // Use the script from the webpack dev server                    //
    var target = Meteor.isCordova ? 'cordova' : 'web';               // 22
    var devServerOrigin = __WebpackDevServerConfig__.protocol + '//' + (__WebpackDevServerConfig__['public'] || __WebpackDevServerConfig__.host + ':' + __WebpackDevServerConfig__.port);
                                                                     //
    var scriptEl = document.createElement('script');                 // 25
    scriptEl.type = 'text/javascript';                               // 26
    scriptEl.src = devServerOrigin + '/assets/' + target + '.js';    // 27
    document.head.appendChild(scriptEl);                             // 28
  });                                                                //
}                                                                    //
///////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/webpack:reload/reload.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['webpack:reload'] = {};

})();
