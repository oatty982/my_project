class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      alert(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  export default User;
  