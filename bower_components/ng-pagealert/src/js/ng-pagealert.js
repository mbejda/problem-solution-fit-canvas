(function() {
    'use strict';
    function pageAlert() {
        return {

            restrict: 'E',
            replace:true,
            scope:{},
            controller: function($scope, $pageAlert, $timeout) {
                $scope.show = false;
                $scope.api = $pageAlert;

                $scope.$watch('api.status', toggledisplay);
                $scope.$watch('api.message', toggledisplay);
                $scope.$watch('api.ttl', toggledisplay);

                $scope.hide = function() {
                    $scope.show = false;
                    $scope.api.clear();
                };

                function toggledisplay() {
                    $scope.show = !!($scope.api.status && $scope.api.message && $scope.api.icon);
                    if ($scope.api.ttl) {
                        $timeout(function() {
                            $scope.hide();
                        },$scope.api.ttl);
                    }
                }

            },
        templateUrl:'../src/templates/basic.html'

        };
    }
    function $pageAlert($rootScope) {
        //content
        return {
            status: null,
            message: null,
            ttl: null,
            success: function(params) {
                this.status = 'success';
                if (params.ttl) this.ttl = params.ttl;
                this.message = params.msg;
                this.icon = 'ok';
            },
            info: function(params) {
                this.status = 'info';
                if (params.ttl) this.ttl = params.ttl;
                this.message = params.msg;
                this.icon = 'info-sign';
            },
            warning: function(params) {
                this.status = 'warning';
                if (params.ttl) this.ttl = params.ttl;
                this.message = params.msg;
                this.icon = 'warning-sign';
            },
            error: function(params) {
                this.status = 'danger';
                if (params.ttl) this.ttl = params.ttl;
                this.message = params.msg;
                this.icon = 'exclamation-sign';
            },
            clear: function() {
                this.status = null;
                this.ttl = null;
                this.message = null;
                this.icon = null;
            }
        };
    }

    angular
        .module('ngPageAlert', [])
        .factory('$pageAlert', $pageAlert)
        .directive('pageAlert', pageAlert);
    $pageAlert.$inject = ['$rootScope'];
})();
