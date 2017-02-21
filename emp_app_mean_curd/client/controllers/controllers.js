/* globals myApp */
myApp.controller('empController', function($scope, $route, $routeParams, $http, $location) {
    $scope.getEmployees = function() {
        $http.get('/api/employees').then(function(response) {
            $scope.employees = response.data;
        });
    };

    $scope.showEmployee = function() {
        var id = $routeParams.id;
        console.log(id);
        $http.get('/api/employees/' + id).then(function(response) {
            $scope.employee = response.data;
        });
    };

    $scope.addEmployee = function() {
        $http.post('/api/employees/', $scope.employee).then(function(response) {
            $scope.employee = response.data;
            $location.path('/employees');
        });
    };

    $scope.updateEmployee = function() {
        var id = $routeParams.id;
        $http.put('/api/employees/' + id, $scope.employee).then(function(response) {
            $scope.employee = response.data;
            $location.path('/employees');
        });
    };



    $scope.deleteEmployee = function(id) {
        console.log("delete Employee");
        $http.delete('/api/employees/' + id).then(function(response) {
            $scope.employee = response.data;
            console.log("Hello");
            $route.reload();
        });
    };
});
