class Student {
    //Assuming total(outof) marks is 100 per subject
    constructor (rNumber,name, marks1, marks2, marks3, total, percentage ) {
        this.rNumber = rNumber;
        this.name = name;
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3
        this.total = 0;
        this.percentage = 0;

    }

    set setNumber (rNumber) {
        this.rNumber = rNumber;
    }
    get getNumber () {
        return this.rNumber;
    }

    set setName (name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }

    set setMarks1 (marks1) {
        this.marks1 = marks1;
    }
    get getMarks1 () {
        return this.marks1;
    }

    set setMarks2 (marks2) {
        this.marks2 = marks2;
    }
    get getMarks2 () {
        return this.marks2;
    }

    set setMarks3 (marks3) {
        this.marks3 = marks3;
    }
    get getMarks3 () {
        return this.marks3;
    }

    calTotal () {
        return this.marks1 + this.marks2 + this.marks3;
    }

    calPercentage () {
        return (this.marks1 + this.marks2 + this.marks3)/3 ;// assuming 100 is total marks
    }
}


var x = new Student();
x.setNumber = 1;
x.setName = "rohan";
x.setMarks1 = 66;
x.setMarks2 = 86;
x.setMarks3 = 92;

console.log(x.calTotal());
console.log(x.calPercentage());

document.getElementById("demo").innerHTML = "the student with roll number " +
x.getNumber + " and name " + x.getName + " has marks " +
x.marks1 + ' ' + x.marks2 + ' ' + x.marks3 + ' ' + 
"which makes a total " + x.calTotal() + " and percentage " +
x.calPercentage();
