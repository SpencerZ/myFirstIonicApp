var ListCheckinController = [
'$scope',
function($scope){
	$scope.user = 'Spencer';
	$scope.places = ['Chengdu', 'Kyoto', 'Iceland'];

	$scope.checkin = function(){
		
	}
}
];

var controllers = angular.module('swarm.controllers',[]);
controllers.controller('ListCheckinController', ListCheckinController);