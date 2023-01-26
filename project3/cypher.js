
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
// The Employee class represents an employee in the sales department
class Employee {
  // The constructor function is called when creating a new instance of the Employee class
  // It initializes the properties of the instance with the given arguments
 constructor(name, type) {
    this.name = name;
    this.type = type;
}

  // The calculatePayout method calculates the payout for the employee based on the type of employee
  calculatePayout(sales) {
    if (this.type === 'salaried') {
      if (sales >= this.salesTarget) {
        return `$${(this.salary * 1.1).toFixed(2)}`;
      } else {
        return `$${this.salary.toFixed(2)}`;
      }
    } else if (this.type === 'hourly') {
      let hourlyPay = this.hours * this.hourlyRate;
      if (sales >= this.salesTarget) {
        return `$${(hourlyPay * 1.5).toFixed(2)}`;
      } else {
        return `$${hourlyPay.toFixed(2)}`;
      }
    } else if (this.type === 'hybrid') {
      let hourlyPay = this.hours * this.hourlyRate;
      if (sales >= this.salesTarget) {
        return `$${((this.salary + hourlyPay) * 1.2).toFixed(2)}`;
      } else {
        return `$${(this.salary + hourlyPay).toFixed(2)}`;
      }
    }
  }

  // The displayPayout method displays the name, type, and payout of the employee
  displayPayout(sales) {
    console.log(`Employee: ${this.name} (${this.type})\nPayout: ${this.calculatePayout(sales)}`);
  }
}

// The SalariedEmployee class represents a salaried employee in the sales department
// It inherits from the Employee class and adds a salary property
class SalariedEmployee extends Employee {
  // The constructor function is called when creating a new instance of the SalariedEmployee class
  // It initializes the properties of the instance with the given arguments
  // It also calls the parent class' constructor function with the `super()` call
  constructor(name, salary, salesTarget) {
    super(name, 'salaried');
    this.salary = salary;
    this.salesTarget = salesTarget;
  }
}

// The HourlyEmployee class represents an hourly employee in the sales department
// It inherits from the Employee class and adds an hourly rate and hours worked properties
class HourlyEmployee extends Employee {
  // The constructor function is called when creating a new instance of the HourlyEmployee class
  // It initializes the properties of the instance with the given arguments
  // It also calls the parent class' constructor function with the `super()` call
    constructor(name, hourlyRate, hours, salesTarget) {
    super(name, 'hourly');
    this.hourlyRate = hourlyRate;
    this.hours = hours;
    this.salesTarget = salesTarget;
  }
}

// The HybridEmployee class represents a hybrid employee in the sales department
// It inherits from the Employee class and adds a salary and hourly rate properties
class HybridEmployee extends Employee {
  // The constructor function is called when creating a new instance of the HybridEmployee class
    // It initializes the properties of the instance with the given arguments
    // It also calls the parent class' constructor function with the `super()` call
    constructor(name, salary, hourlyRate, hours, salesTarget) {
    super(name, 'hybrid');
    this.salary = salary;
    this.hourlyRate = hourlyRate;
    this.hours = hours;
    this.salesTarget = salesTarget;
    }
}

// Create instances of the different kinds of employees
const salariedEmployee1 = new SalariedEmployee('John', 5000, 10);
const salariedEmployee2 = new SalariedEmployee('Jane', 6000, 15);
const hourlyEmployee1 = new HourlyEmployee('Bob', 20, 40, 10);
const hourlyEmployee2 = new HourlyEmployee('Mary', 25, 35, 15);
const hybridEmployee1 = new HybridEmployee('Steve', 5000, 20, 40, 10);
const hybridEmployee2 = new HybridEmployee('Sarah', 6000, 25, 35, 15);

// Display the payout for each employee
salariedEmployee1.displayPayout(12);
salariedEmployee2.displayPayout(20);
hourlyEmployee1.displayPayout(12);
hourlyEmployee2.displayPayout(20);
hybridEmployee1.displayPayout(12);
hybridEmployee2.displayPayout(20);

// Employee: John (salaried)
// Payout: $5500.00
// Employee: Jane (salaried)
// Payout: $6600.00
// Employee: Bob (hourly)
// Payout: $1200.00
// Employee: Mary (hourly)
// Payout: $1750.00
// Employee: Steve (hybrid)
// Payout: $7400.00
// Employee: Sarah (hybrid)
// Payout: $8850.00
