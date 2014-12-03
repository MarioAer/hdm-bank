angular.module('swFrontApp')
  .factory('myService', function () {
    return {
      foo : function () {
        console.log('HI from foo!');
      }
    }
  })
