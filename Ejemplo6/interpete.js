// Contexto
class Context {
    constructor() {
      this.variables = {};
    }
  
    getVariable(name) {
      return this.variables[name];
    }
  
    setVariable(name, value) {
      this.variables[name] = value;
    }
  }

   // Expresión abstracta
   class Expression {
    interpret(context) {}
  }

  // Expresión de suma
  class AddExpression extends Expression {
    constructor(left, right) {
      super();
      this.left = left;
      this.right = right;
    }
  
    interpret(context) {
      const leftValue = this.left.interpret(context);
      const rightValue = this.right.interpret(context);
      return leftValue + rightValue;
    }
  }
    // Expresión de resta
    class SubtractExpression extends Expression {
        constructor(left, right) {
          super();
          this.left = left;
          this.right = right;
        }
      
        interpret(context) {
          const leftValue = this.left.interpret(context);
          const rightValue = this.right.interpret(context);
          return leftValue - rightValue;
        }
      }
      // Expresión de multiplicación
  class MultiplyExpression extends Expression {
    constructor(left, right) {
      super();
      this.left = left;
      this.right = right;
    }
  
    interpret(context) {
      const leftValue = this.left.interpret(context);
      const rightValue = this.right.interpret(context);
      return leftValue * rightValue;
    }
  }
  // Expresión de división
  class DivideExpression extends Expression {
    constructor(left, right) {
      super();
      this.left = left;
      this.right = right;
    }
  
    interpret(context) {
      const leftValue = this.left.interpret(context);
      const rightValue = this.right.interpret(context);
      return leftValue / rightValue;
    }
  }
    // Expresión numérica
    class NumberExpression extends Expression {
        constructor(value) {
          super();
          this.value = value;
        }
      
        interpret(context) {
          return this.value;
        }
      }

    // Creamos un contexto y variables
    const context = new Context();
    context.setVariable('a', 5);
    context.setVariable('b', 10);

      // Creamos expresiones
  const expression1 = new MultiplyExpression(new NumberExpression(2), new NumberExpression(3));
  const expression2 = new AddExpression(new NumberExpression(2), new NumberExpression(3));
  const expression3 = new SubtractExpression(new NumberExpression(5), new NumberExpression(2));
  const expression4 = new DivideExpression(new NumberExpression(10), new NumberExpression(2));
  const expression5 = new MultiplyExpression(new NumberExpression(2), new AddExpression(new NumberExpression(3), new NumberExpression(4)));
  const expression6 = new SubtractExpression(new NumberExpression(10), new AddExpression(new NumberExpression(3), new NumberExpression(4)));
  
  
  // Interpretamos las expresiones
  console.log(expression1.interpret(context)); // 6
  console.log(expression2.interpret(context)); // 5
  console.log(expression3.interpret(context)); // 3
  console.log(expression4.interpret(context)); // 5
  console.log(expression5.interpret(context)); // 14
  console.log(expression6.interpret(context)); // 3
  console.log(context.getVariable('a')); // 5