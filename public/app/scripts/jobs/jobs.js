(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('jobCtrl', jobCtrl);
    jobCtrl.$inject = ['$scope', 'alumniService'];
    function jobCtrl($scope, alumniService) {
        $scope.newJob = {};
        $scope.jobarr = [];
        $scope.numLimit = 200;
        $scope.readMore = function () {
           $scope.numLimit = 10000;
           $scope.jobarr = res.data;
            //$scope.jobarr.push($scope.newJob);
        };
        $scope.dataMode = "ADD";
        $scope.dateOpts1 = {
            dateFormat: 'd-m-y',
        };
        function loadInitial() {
            alumniService.getAllJob(function (err, res) {
                if (!err) {
                    $scope.jobarr = res.data;
                }
            })
        }
        loadInitial();

        $scope.saveJob = function () {


            alumniService.postJob($scope.newJob, function (err, res) {
                if (!err) {
                    $scope.jobarr.push($scope.newJob);
                    $('#jobModal').modal("hide");
                }

            })
        }

        $scope.setEnvForEdit = function (job) {
            $scope.dataMode = "EDIT";
            $('#jobModal').modal("show");
            $scope.newJob = JSON.parse(JSON.stringify(job));

        }
        $scope.removeJob = function (index) {
            $scope.newJob.splice(index, 1);
        }
 
        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;

        }
        $scope.deleteJobSure = function () {
            alumniService.deleteJob($scope.deleteIndex, function (err, res) {
            })

            $scope.jobarr.splice($scope.deleteIndex, 1);
            $("#confirmModal").modal('hide');

        }

        $scope.updateJob = function () {
            delete $scope.newJob.$$hashKey
            alumniService.updateJob($scope.newJob._id, $scope.newJob, function (err, res) {
                if (!err) {
                    var index = $scope.jobarr.findIndex(function (data) {
                        return data._id == $scope.newJob._id;
                    });
                    $scope.jobarr[index] = $scope.newJob;

                }
            });
        }
        // $scope.search =function(Jtitle,cname,location,salary,Experience,type,lastdate,externallink){
        //     angular.element('#basic-modal').modal('show');
        //     $scope.cname = cname;
        //     $scope.location = location;
        //     $scope.Jtitle = Jtitle;
        //     $scope.salary = salary;
        //     $scope.Experience = Experience;
        //     $scope.type = type;
        //     $scope.lastdate = lastdate;
        //     $scope.externallink = externallink;
        // }

        //filter
        $scope.roomCategoryType = [];
        $scope.filterRoomName = [];
        $scope.room = [];

         //Default display
         $scope.roomCategory = function (event) {
            if ($scope.roomCategoryType.length > 0) {
                if ($.inArray(event.roomname, $scope.roomCategoryType) < 0)
                    return;
            }
            return event;
        }
        $scope.roomNameFilters = function (event) {
            if ($scope.filterRoomName.length > 0) {
                if ($.inArray(event.roomname, $scope.filterRoomName) < 0)
                    return;
            }
            return event;
        }

        //Filter display
        $scope.roomTypes = function (event) {
            var i = $.inArray(event, $scope.roomCategoryType);
            
            if (i > -1) {
                $scope.roomCategoryType.splice(i, 1);
            } else {
                $scope.roomCategoryType.push(event);
            }
        }
    };
})();


