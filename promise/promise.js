console.log("begin");

function studentID(){
    const p = new Promise(function (success, failure) {
        setTimeout(function (){
            success({studentId:"673447"});
        },3000);
    });
    return p;
    }
    
    function studentDetails(studentId) {
        const p = new Promise(function (success, failure) {
            setTimeout(function (){
                success({studentId, name:"xxx", age:20});
            },2000);
        });
        return p;   
    }
    
    function studentMarks(){
        const p = new Promise(function(success, failure){
        setTimeout(function (){
            // success([98,78,99,100,95]); 
            failure("ERROR!");
        },2000);
    });
    return p;
    }


studentID(3).then(function (idNum) {
    console.log(idNum);
    return studentDetails(idNum.studentId)
}).then(function (studentdetails) {
    console.log(studentdetails);
    return studentMarks(studentdetails.studentId);
}).then(function (marks) {
    console.log(marks);
}).catch(function (error) {
    console.log(error);
});



