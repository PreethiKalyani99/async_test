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

    async function example() {
        try{
         const name = await studentID();
         console.log(name);
         const details = await studentDetails(name.studentId);
         console.log(details);
         const mark = await studentMarks(details.studentId);
         console.log(mark);
        }
        catch(err){
            console.log(err);
        }
    }
    example();
