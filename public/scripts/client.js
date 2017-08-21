console.log('javascript sourced');

var app = angular.module('EmployeeApp', []);

app.controller('Controller', ['$http', function($http) {
    console.log('controller has been loaded');
    var self = this;

    self.employees = [];


    self.getEmployees = function() {
        $http({
            method: 'POST',
            url: '/employees',
            data: self.employees
        }).then(function(response) {
            console.log(response.data);

        });
    }

    self.getMessages = function() {
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function(response) {
            console.log(response.data);
            self.message = response.data
        });
    }
    self.getMessages();
}]);