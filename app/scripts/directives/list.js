angular.module('canvas')
  .directive('list', function () {
    return {
      restrict: 'E',
      scope : {
        i: '=',
        canvas:'=',
        placeholder:'@',
        contentType:'@',
        style:'@'
      },
      templateUrl: 'list.html',
      link: function postLink(scope, element, attrs) {
      },
      controller : function($scope){
        $scope.addContent = function(canvas,obj){
          $scope.canvas.content.push(angular.copy(obj));
        }
        $scope.removeContent = function(canvas,index){
          $scope.canvas.content.splice(index,1);
        }


      }
    };
  });
