console.log('javascript sourced');

var app = angular.module('EmployeeApp', []);

app.controller('Controller', ['$http', function($http) {
    console.log('controller has been loaded');
    var self = this;

    self.getEmployees = function() {
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function(response) {
            console.log('got the call', response.data);
            self.employees = response.data;
        });
    }
    self.getEmployees();

    self.postNewEmployee = function() {
        console.log('submit has been hit');
        var employeeToSend = {
            firstname: self.firstname,
            lastname: self.lastname,
            jobtitle: self.jobtitle,
            salary: self.salary

        }
        console.log(employeeToSend);
        $http({
            method: 'POST',
            url: '/employees',
            data: employeeToSend
        }).then(function(response) {
            console.log('this works!!!');

        })
        self.getEmployees();
    }


    // self.getEmployees = function() {
    //     $http({
    //         method: 'POST',
    //         url: '/employees',
    //         data: self.employees
    //     }).then(function(response) {
    //         console.log(response.data);

    //     });
    // }


}]);