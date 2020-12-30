/* Students Class */
class Students{
    matNumber:string;
    studentName:string;
    coursesArray:Courses[];
    sumCoursePt:number;
    sumCreditVal:number;
    GPA:number;
    constructor(matNum:string, studName:string, courseAry:Courses[]){
        
        this.matNumber = matNum;
        this.studentName = studName;
        this.coursesArray = courseAry;
    };

// Sum of Course Points
    calSumCoursePt(){
        
       this.sumCoursePt = 0;
        for(let i = 0; i < this.coursesArray.length; i++) {
            this.coursesArray[i].calCoursePoint();
            this.sumCoursePt += this.coursesArray[i].calCoursePoint();
        };
        return this.sumCoursePt;
    }
// Sum of Credit Value
    calSumCreditVal(){
        this.sumCreditVal = 0;
        for(let i = 0; i < this.coursesArray.length; i++) {
           this.sumCreditVal += this.coursesArray[i].getCreditVal();
        };
        return this.sumCreditVal;
    }
// GPA calculator
    calGPA(){
      this.calSumCreditVal();
      this.calSumCoursePt();
       return this.GPA = this.sumCoursePt / this.sumCreditVal;
    }
}

/* Courses Class */
class Courses {
    courseCode:string;
    creditValue:number;
    score:number;
    gradePoint:number
    letterGrade:string;
    coursePoint:number;

    constructor(crsCode:string, credVal:number, score:number){
        this.courseCode = crsCode;
        this.creditValue = credVal;
        this.score = score;
    };

    calCoursePoint() {
        if(this.score >= 80 && this.score <= 100) {
           this.gradePoint = 4.0;
           this.letterGrade = 'A';
        } else if (this.score >= 70 && this.score <= 79) {
            this.gradePoint = 3.5;
           this.letterGrade = 'B+';
        } else if (this.score >= 60 && this.score <= 69) {
            this.gradePoint = 3.0;
           this.letterGrade = 'B';
        } else if (this.score >= 55 && this.score <= 59) {
            this.gradePoint = 2.5;
           this.letterGrade = 'C+';
        } else if (this.score >= 50 && this.score <= 54) {
            this.gradePoint = 2.0;
           this.letterGrade = 'C';
        } else if (this.score >= 45 && this.score <= 49) {
            this.gradePoint = 1.5;
           this.letterGrade = 'D+';
        } else if (this.score >= 40 && this.score <= 44) {
            this.gradePoint = 1.0;
           this.letterGrade = 'D';
        } else if (this.score >= 0 && this.score <= 49) {
            this.gradePoint = 0.0;
           this.letterGrade = 'F';
        } 

        return this.coursePoint = this.creditValue * this.gradePoint;
    }

    // Getter for Credit value
    getCreditVal(){
        return this.creditValue;
    }
}


// Sum of Credit Values


// Student Object Delcarations
const onefirst = new Students("SC18A447", "neba", [new Courses("CSC 205", 6, 90), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,87), new Courses("MAT 201",6,84), new Courses("ENG 101",2,75), new Courses("FRE 101",2,64), new Courses("CVE 100",4,64)]);

// Array of Student Objects
let studentArray:Students[] = [onefirst];




let sum: number = 0;
console.log(onefirst.studentName + " " + onefirst.matNumber);
for(let i=0; i<onefirst.coursesArray.length ;i++) {
    onefirst.coursesArray[i].calCoursePoint();

    sum += onefirst.coursesArray[i].calCoursePoint();
    console.log(onefirst.coursesArray[i].courseCode);
    console.log("Grade point: "+onefirst.coursesArray[i].gradePoint + " | Credit Value: " + onefirst.coursesArray[i].creditValue + " | Course Point: " + onefirst.coursesArray[i].calCoursePoint());
}
console.log("Course point sum: "+sum);

console.log("GPA: "+onefirst.calGPA());


