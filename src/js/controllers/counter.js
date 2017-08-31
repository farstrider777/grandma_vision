//import angular from 'angular';
var count = 0;
var toggle = true;

function LikeCounter ($scope) {
  console.log('test');

  $scope.count = count;
  $scope.s = 's';

  $scope.addLike = function () {
    console.log('like');
    if(toggle){
      count++;
    }else{
      count--;
    }
    console.log(count);
    $scope.count = count;
    if(count === 1){
      $scope.s = '';
    }else{
      $scope.s = 's';
    }
  };

  $scope.minusLike = function () {
    if(toggle){
      toggle = false
    }else{
      toggle = true
    }
  };
}

LikeCounter.$inject = ['$scope'];

export default LikeCounter;
