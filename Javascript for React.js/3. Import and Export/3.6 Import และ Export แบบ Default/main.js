import User from './user.js';
import LoginForm from './loginForm.js';
import func from './func.js';

// You can now use the imported modules in your code
const user = new User('John', 25);
user.sayHello();

const loginForm = new LoginForm();
loginForm.render();

func(); // Call the imported function
