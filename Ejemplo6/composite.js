// Componente base
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getName() {
      return this.name;
    }
  
    getSalary() {
      return this.salary;
    }
  
    setSalary(salary) {
      this.salary = salary;
    }
  
    getTotalSalary() {
      return this.salary;
    }
  
    print() {
      console.log(`Nombre: ${this.name}, Salario: ${this.salary}`);
    }
  }
  // Hoja
  class Developer extends Employee {
    constructor(name, salary) {
      super(name, salary); // Llamamos al constructor de la clase base
    }
  }
  
  // Hoja
  class Designer extends Employee {
    constructor(name, salary) {
      super(name, salary);  // Llamamos al constructor de la clase base
    }
  }
  
    // Composite
    class Manager extends Employee {
        constructor(name, salary) {
          super(name, salary);
          this.employees = [];
        }
      
        addEmployee(employee) {
          this.employees.push(employee);
        }
      
    
        getTotalSalary() {
          let totalSalary = this.salary;
          for (const employee of this.employees) {
            totalSalary += employee.getTotalSalary();
          }
          return totalSalary;
        }
      
        print() {
          console.log(`Nombre: ${this.name}, Salario: ${this.salary}`);
          console.log('Subordinados:');
          for (const employee of this.employees) {
            employee.print();
          }
        }
      }
     // Creamos algunos empleados y un gerente
  const dev1 = new Developer('John Doe', 50000);
  const dev2 = new Developer('Jane Doe2', 60000);
  const designer1 = new Designer('Bob Smith', 70000);
  const manager1 = new Manager('Mary Johnson', 100000);


    // Agregamos empleados al gerente
    manager1.addEmployee(dev1);
    manager1.addEmployee(dev2);
    manager1.addEmployee(designer1);
    
     // Imprimimos el salario total del gerente y sus subordinados
  console.log(`Salario total de ${manager1.getName()}: ${manager1.getTotalSalary()}`);
  manager1.print();