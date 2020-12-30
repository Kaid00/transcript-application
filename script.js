/* Students Class */
var Students = /** @class */ (function () {
    function Students(matNum, studName, courseAry) {
        this.matNumber = matNum;
        this.studentName = studName;
        this.coursesArray = courseAry;
    }
    ;
    // Sum of Course Points
    Students.prototype.calSumCoursePt = function () {
        this.sumCoursePt = 0;
        for (var i = 0; i < this.coursesArray.length; i++) {
            this.coursesArray[i].calCoursePoint();
            this.sumCoursePt += this.coursesArray[i].calCoursePoint();
        }
        ;
        return this.sumCoursePt;
    };
    // Sum of Credit Value
    Students.prototype.calSumCreditVal = function () {
        this.sumCreditVal = 0;
        for (var i = 0; i < this.coursesArray.length; i++) {
            this.sumCreditVal += this.coursesArray[i].getCreditVal();
        }
        ;
        return this.sumCreditVal;
    };
    // GPA calculator
    Students.prototype.calGPA = function () {
        this.calSumCreditVal();
        this.calSumCoursePt();
        return this.GPA = this.sumCoursePt / this.sumCreditVal;
    };
    return Students;
}());
/* Courses Class */
var Courses = /** @class */ (function () {
    function Courses(crsCode, credVal, score) {
        this.courseCode = crsCode;
        this.creditValue = credVal;
        this.score = score;
    }
    ;
    Courses.prototype.calCoursePoint = function () {
        if (this.score >= 80 && this.score <= 100) {
            this.gradePoint = 4.0;
            this.letterGrade = 'A';
        }
        else if (this.score >= 70 && this.score <= 79) {
            this.gradePoint = 3.5;
            this.letterGrade = 'B+';
        }
        else if (this.score >= 60 && this.score <= 69) {
            this.gradePoint = 3.0;
            this.letterGrade = 'B';
        }
        else if (this.score >= 55 && this.score <= 59) {
            this.gradePoint = 2.5;
            this.letterGrade = 'C+';
        }
        else if (this.score >= 50 && this.score <= 54) {
            this.gradePoint = 2.0;
            this.letterGrade = 'C';
        }
        else if (this.score >= 45 && this.score <= 49) {
            this.gradePoint = 1.5;
            this.letterGrade = 'D+';
        }
        else if (this.score >= 40 && this.score <= 44) {
            this.gradePoint = 1.0;
            this.letterGrade = 'D';
        }
        else if (this.score >= 0 && this.score <= 49) {
            this.gradePoint = 0.0;
            this.letterGrade = 'F';
        }
        return this.coursePoint = this.creditValue * this.gradePoint;
    };
    // Getter for Credit value
    Courses.prototype.getCreditVal = function () {
        return this.creditValue;
    };
    return Courses;
}());
// Sum of Credit Values
// Student Object Delcarations
var onefirst = new Students("SC18A447", "neba", [new Courses("CSC 205", 6, 90), new Courses("CSC 207", 4, 55), new Courses("CSC 209", 6, 66), new Courses("CSC 211", 4, 87), new Courses("MAT 201", 6, 84), new Courses("ENG 101", 2, 75), new Courses("FRE 101", 2, 64), new Courses("CVE 100", 4, 64)]);
// Array of Student Objects
var studentArray = [onefirst];
/* Calculate GPA
    Course points = cred-value * grade points
    GPA = Sum of course points / Sum of credit values

*/
var sum = 0;
console.log(onefirst.studentName + " " + onefirst.matNumber);
for (var i = 0; i < onefirst.coursesArray.length; i++) {
    onefirst.coursesArray[i].calCoursePoint();
    sum += onefirst.coursesArray[i].calCoursePoint();
    console.log(onefirst.coursesArray[i].courseCode);
    console.log("Grade point: " + onefirst.coursesArray[i].gradePoint + " | Credit Value: " + onefirst.coursesArray[i].creditValue + " | Course Point: " + onefirst.coursesArray[i].calCoursePoint());
}
console.log("Course point sum: " + sum);
console.log("GPA: " + onefirst.calGPA());
