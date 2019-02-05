(function () {
    'use strict';
    var App = angular.module('app');
    App.service('alumniService', alumniService);
    alumniService.$inject = ['$http'];

    function alumniService($http) {

        //myprofile
        this. getAllAlumni=function(callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getAllAlumni'
            });
         alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };
        this.createAlumni = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/createAlumni'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        /*this.updateAlumni=function(id, details, callback){
            var alumniIdentity = $http({
                method: 'put',
                data: JSON.stringify(details),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/myprofile' + id
            })
            alumniIdentity.then(function (response){
                callback(null, response);
            }, function(error){
                callback(error, null);
            });
        }*/
        
        this.updateAlumni = function (id, recordToEdit, callback) {
            var alumniIdentity = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/updateAlumni'
            });
            alumniIdentity.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.deleteAlumni = function (id, callback) {
            var alumniIdentity = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/deleteAlumni'
            });
            alumniIdentity.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
    
        /*********jobs**********/
        this. getAllJob=function(callback){ 
            var alumniIdentity = $http({
                method: 'GET',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getAllJob'
            });
         alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        this.postJob = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/postJob'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateJob = function (id, recordToEdit, callback) {
            var alumniIdentity = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/updateJob'
            });
            alumniIdentity.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.deleteJob = function (id, callback) {
            var alumniIdentity = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/deleteJob'
            });
            alumniIdentity.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        /**********************News************************** */
        this. getAllNews=function(callback){ 
            var alumniIdentity = $http({
                method: 'GET',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getAllNews'
            });
         alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };
        this.postNews = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/postNews'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateNews = function (id, recordToEdit, callback) {
            var alumniIdentity = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/updateNews'
            });
            alumniIdentity.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteNews = function (id, callback) {
            var alumniIdentity = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/deleteNews'
            });
            alumniIdentity.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.removeDirtyAttachment = function (id, callback) {
            var request = {
                url: "news/removeDirtyAttachment",
                method: 'DELETE',
                data: { "dirtyFileId": id },
                headers: { 'Content-type': 'application/json'}

            };
            $http(request).then(function (response) {
                callback(null, response.data);
            }, function (error) {
                callback(error, null);
            });
        }

        /**************event**********/
        this. getAllEvent=function(callback){ 
            var alumniIdentity = $http({
                method: 'GET',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getAllEvent'
            });
         alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        this.postEvent = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/postEvent'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        /***********api-alumni-event***************/
        this. getAllAlumniEvent=function(callback){ 
            var alumniIdentity = $http({
                method: 'GET',
                header :{'Content-Type': 'application/json'},
                url: 'remote/getAllAlumniEvent'
            });
         alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };
        /*********appi-sis*********/
        this.getAllStudentLoc=function(callback){
            var alumniIdentity =  $http({
                method: 'GET',
                header :{'Content-Type': 'application/json'},
                url: 'remote/getAllStudentLoc'
        });
        alumniIdentity.then(function (response) {
            callback(null, response);
        }, function (error) {
            callback(error, null);
        });
    };
        /******************************* Dashboard  ************************************ */
       
        //Alumni Group Membership List
        this. getStudentDetails=function(callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getAlumniList'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };



        //Filter Data Get
        this.getFilterLists=function(details, callback){ 
            var alumniIdentity = $http({
                method: 'post',
                data: JSON.stringify(details),
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getFilterList'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        this.getGraduationYearList=function(callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getFilterDataList/yearOfGraduation'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };
        this.getDegreeList=function(callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getFilterDataList/degreeName'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };
        this.getDepartmentList=function(callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getFilterDataList/branchName'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };
        this.getLocationList=function(callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getFilterDataList/contact.city'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        //Get Alumni Member
        this.getAlumniMember=function(alumniId ,callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getAlumniMember/' + alumniId
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };
        
        // Edit Alumni Member
        this.editAlumniMember=function(id, details, callback){
            var alumniIdentity = $http({
                method: 'put',
                data: JSON.stringify(details),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/editAlumniMember/' + id
            })
            var alumniInfo = alumniIdentity.then(function (response){
                callback(null, response);
            }, function(error){
                callback(error, null);
            });
        }
        



        /******************************* Group Membership ************************************ */
        
        //Alumni List Home Page
        this.getAllAlumniDetails=function(groupName ,callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/alumniDteails/' + groupName
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        //Alumni Group Membership List
        this.getAllAlumniGroupName=function(callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumnigroupname/getGroupName'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        //Delete Alumni Group Member 
        this.removeGroupMember=function(id, details, callback){ 
            var alumniIdentity = $http({
                method: 'post',
                data: JSON.stringify(details),
                header :{'Content-Type': 'application/json'},
                url: 'alumni/alumniGroupMember/' + id
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };



        //Edit Group Name
        this.editGroupName=function(id, details, callback){
            var alumniIdentity = $http({
                method: 'put',
                data: JSON.stringify(details),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumnigroupname/editGroupName/' + id
            })
            var alumniInfo = alumniIdentity.then(function (response){
                callback(null, response);
            }, function(error){
                callback(error, null);
            });
        }
        //Add Group Name
        this.addGroupName=function(details, callback){
            var alumniIdentity = $http({
                method: 'post',
                data: JSON.stringify(details),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumnigroupname/addGroupName'
            })
            var alumniInfo = alumniIdentity.then(function (response){
                callback(null, response);
            }, function(error){
                callback(error, null);
            });
        }

        //Edit Get List
        this.getAlumniList=function(alumniId ,callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/alumniList/' + alumniId
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        //Get Student List
        this.getStudentDetail=function(rollNo, callback){ 
            var alumniIdentity = $http({
                method: 'get',
                header :{'Content-Type': 'application/json'},
                url: 'alumni/studentDetails/' + rollNo
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        //Add Alumni List
        this.addAlumniList=function(details, callback){
            var alumniIdentity = $http({
                method: 'post',
                data: JSON.stringify(details),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/addNameList'
            })
            var alumniInfo = alumniIdentity.then(function (response){
                callback(null, response);
            }, function(error){
                callback(error, null);
            });
        }

        //Edit Alumni List 
        this.editAlumniList=function(id, details, callback){
            var alumniIdentity = $http({
                method: 'put',
                data: JSON.stringify(details),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/editNameList/' + id
            })
            var alumniInfo = alumniIdentity.then(function (response){
                callback(null, response);
            }, function(error){
                callback(error, null);
            });
        }

        //Edit Alumni List with RollNo
        this.editAlumniListRollNo=function(Rollno, details, callback){
            var alumniIdentity = $http({
                method: 'put',
                data: JSON.stringify(details),
                headers: { 'Content-Type': 'application/json' },
                url: 'alumni/editNameListRollNo/' + Rollno
            })
            var alumniInfo = alumniIdentity.then(function (response){
                callback(null, response);
            }, function(error){
                callback(error, null);
            });
        }


        ///**************************************  Email Send   ******************************************* */

        this.getGroupMemberEmail=function(details, callback){ 
            var alumniIdentity = $http({
                method: 'post',
                data: JSON.stringify(details),
                header :{'Content-Type': 'application/json'},
                url: 'alumni/getGroupMemberEmail'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
        };

        /*** uploadFileToFolder  ***/
        this.uploadFileToFolder=function(fd, callback){
           
            var alumniIdentity = $http({
                method: 'post',
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined},
                data: fd,
                url: 'alumni/fileupload'
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
            
        };


        /*** Add Alumni Group Member Fron Excel Sheet ***/
        this.addAlumniMembers=function(fd, groupName, callback){
        
            var alumniIdentity = $http({
                method: 'post',
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined},
                data: fd,
                url: 'alumni/addGroupMembers/' + groupName
            });
            var alumniInfo = alumniIdentity.then(function (response) {
                callback(null, response);
            }, function (error) {
                callback(error, null);
            });
            
        };



}
})();
