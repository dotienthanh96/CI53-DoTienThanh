class student {
    codeStudent;
    name;
    age;
    schoolYear;
    constructor(codeStudent,name,age,schoolYear) {
        this.codeStudent = codeStudent;
        this.name = name ;
        this.age = age ;
        this.schoolYear = schoolYear ;
    }
}

class lecturers {
    lecturersCode ;
    name ; 
    age;
    level ;
    constructor(lecturersCode,name,age,level ) {
        this.lecturersCode = lecturersCode ;
        this.name = name ; 
        this.age = age ;
        this.level = level;
    }
}

class subjectClass {
    classCode ;
    subject ;
    lecturers = [] ;
    student = [] ; 
    constructor(classCode,subject) {
    this.classCode = classCode;
    this.subject = subject;
}
}

let student1 = new student(1,"Nam",23,"2012-2016");
let lecturers1 = new lecturers(1,"Tin",30,"Thạc sĩ");
let class1 = new subjectClass(3,"English");