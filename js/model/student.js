trainingApp
.factory('studentModel', function(){
    var studentObject = studentObject || {};
    
    var setStudents = function (students) {
        studentObject.studentArray = students;
    }

    var getStudents = function () {
        return studentObject.studentArray || [];
    }

    return {
    	getStudents: getStudents,
        setStudents: setStudents
    };
});