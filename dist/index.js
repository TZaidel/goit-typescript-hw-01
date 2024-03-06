import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello');
    });
}
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
const getUser = (users) => {
    return users.map(user => user.name);
};
const result = getUser(users);
console.log(result);
function logMessage(message) {
    console.log(message);
}
logMessage('Hello, world!');
var Size;
(function (Size) {
    Size["small"] = "small";
    Size["medium"] = "medium";
    Size["large"] = "large";
})(Size || (Size = {}));
const button2 = 'medium';
const button3 = Size.medium;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
function addd(num1, num2) {
    console.log(num1 + num2);
}
function greeting(user) {
    console.log(`Hello ${user.name}`);
}
function user2(name, age) {
    return { name, age };
}
const car = {
    color: 'red',
    price: 1000,
    currency: 'UAH',
    start(color) {
        console.log('Start' + this.color);
    },
};
const user01 = {
    name: 'bob',
    age: 15
};
const user02 = {
    name: 'ana',
    age: 10,
    role: "admin"
};
const fruits = {
    apples: 10,
    bananas: 20
};
const vegetables = {
    potatoes: 50,
    carrots: 10,
    onions: 30
};
const userInfo = {
    name: "Bob",
    age: 20,
    country: "Ukraine",
};
const bookDetails = {
    title: 'Tails',
    pages: 350
};
//!---------------------------Generics
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(100);
console.log(identity(output1));
//-----------------------------
function reverse(arg) {
    return arg.reverse();
}
let numbers = reverse([1, 2, 3, 4, 5]);
console.log(numbers);
let string = reverse(['a', 'b', 'c']);
console.log(string);
//!---------extends & keyof
function lengthOfObject(obj) {
    return obj.length;
}
lengthOfObject({
    name: 'bob',
    color: 'red',
    length: 10
});
//-----------------------------
function getProperty(obj, key) {
    return obj[key];
}
const student = {
    name: "John",
    age: 25
};
let studentName = getProperty(student, "name");
console.log(studentName);
let studentAddress = getProperty(student, "address");
console.log(studentAddress);
function updateTodo(todo, fieldsToUpdate) {
    return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
    title: "Learn TypeScript",
    descr: "study basics",
    completed: false
};
const todo2 = updateTodo(todo1, {
    descr: "study generics"
});
console.log(todo2);
const john = {
    name: 'John',
    age: 50
};
john.age = 20; //can't change, only read
const newNumbers = [1, 2, 3, 4, 5];
newNumbers.push(6); //only reading 
newNumbers[0] = 0; //
const johnSummary = {
    name: 'John',
    age: 30
};
const johny = {
    name: "Johny",
    age: 50
};
const database = {
    Kyiv: 2884000,
    Kharkiv: 1441000,
    Odesa: 1015000
};
database.Lviv = 721301;
//!---------------------
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
//# sourceMappingURL=index.js.map