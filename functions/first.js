class Employee {
    constructor(id, name, salary, netSalary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.netSalary = netSalary;
    }

    get getId () {
        return this.id;
    }

    set setId (id) {
        this.id = id;
    }

    get getName() {
        return this.name;
    }

    set setName (name) {
        this.name = name;
    }

    get getSalary () {
        return this.salary;
    }

    set setSalary(salary) {
        this.salary = salary;
    }

    get getNetSalary () {
        return this.netSalary;
    }

    set setNetSalary (netSalary) {
        this.netSalary = netSalary;
    }

    
    calculateNetSalary () {
        return this.netSalary * 0.9;
    }
}

var x = new Employee();// only declaring not defining
x.setId = 100;
x.setName = "raj";
x.setSalary = 20000;
x.setNetSalary = 15000;

console.log(x.calculateNetSalary());// calling the 
console.log(x.getName);// calling the getter 

var y = new Employee(101, "Nikhil", 50000, 48000);

console.log(y.getSalary);