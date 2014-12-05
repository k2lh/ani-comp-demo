var app  = angular.module('app', ['ngRoute', 'ngAnimate','ui.bootstrap']);

app.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'partials/showcase.html',
                controller  : 'showcaseController'
            })

            .when('/singles', {
                templateUrl : 'partials/singles.html',
                controller  : 'singlesController'
            })

            .when('/showcase', {
                templateUrl : 'partials/showcase.html',
                controller  : 'showcaseController'
            })

            .when('/mixer', {
                templateUrl : 'partials/mixer.html',
                controller  : 'mixerController'
            });

    });

app.controller('mainController', function($scope, $http) {
    // save for api calls
    // $scope.data = null;
    // dataService.getData().then(function(dataResponse) {
    //     $scope.data = dataResponse;
    // });

});


app.controller('showcaseController', function($scope, $http) {
    $http.get('json/showcase.json').success(function(data) {
        $scope.group = data;
    });
    $scope.showDetail = function (item) {
        $scope.itemSelected = item.page;
    }
    $scope.showDisplay = function (display) {
        $scope.displaySelected = display;
    }

    $scope.isCollapsed = true;
    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    $http.get('json/call-prep.json').success(function(data) {
        $scope.callPrep = data;
    });
});

app.controller('singlesController', function($scope, $http) {
    $http.get('json/widgets.json').success(function(data) {
        $scope.group = data;
    });

    $scope.showDetail = function (item) {
        $scope.itemSelected = item;
    }

    $scope.showDisplay = function (display) {
        $scope.displaySelected = display;
    }

});

app.controller('mixerController', function($scope, $http) {
    $http.get('json/widgets.json').success(function(data) {
        $scope.group = data;
    });

    $scope.showDetail = function (item) {
        $scope.itemSelected = item;
    }

    $scope.showDisplay = function (display) {
        $scope.displaySelected = display;
    }

});

// ------------- FUTURE USE ------------------------

function DropdownCtrl($scope) {
    $scope.status = {
    isopen: false
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}

app.service('dataService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function() {
        return $http({
            method: 'GET',
            url: 'https://www.example.com/api/v1/page',
            params: 'limit=10, sort_by=created:desc',
            headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
         });
    }
});
