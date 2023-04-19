// 🗂️ say.js
function sayHi(user) {
	alert(`Hello, ${user}!`);
}

function sayBye(user) {
	alert(`Bye, ${user}!`);
}

export {sayHi as hi, sayBye as bye};