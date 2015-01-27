(function() {
  
  'use strict';

  angular.module('angularD3')
  .directive('myDirective', function() {
    var linker = function(scope, element, attrs) {
      console.log("my Link function");
    };
    return {
      restrict: 'EA',
      template: '<h1> asdjfse</h1>',
      link: linker
    }; 
  });

}());
