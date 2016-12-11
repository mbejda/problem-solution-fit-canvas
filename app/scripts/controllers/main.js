angular.module('canvas')
  .controller('MainCtrl', function ($scope,$timeout) {

    $scope.canvas = [];

    $scope.canvas[0] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[1] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[2] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[3] = {
      contentType:{text:'',frequency:''},
      content:[
    ]};
    $scope.canvas[4] = {
      contentType:{'text':'','frequency':''},
      content:[
    ]}
    $scope.canvas[5] = {
      contentType:{'text':'','frequency':''},
      content:[
    ]}
    $scope.canvas[6] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[7] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[8] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[9] = {
      contentType:{"text":""},
      content:[
      ]}
    $scope.canvas[10] = {
      contentType:{"text":""},
      content:[
      ]}
    $scope.load = function(){

      var canvas = localStorage.getItem("canvas");
      try {
        $scope.canvas = JSON.parse(canvas);
        alert("loaded")
      }catch(e){

      }

    }


    $scope.save = function(){
      localStorage.setItem("canvas",JSON.stringify($scope.canvas));
      alert("saved")

      }


  });
