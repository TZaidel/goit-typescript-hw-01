import {concatenation} from './concatenation'

const button = document.querySelector('button')
const input = document.querySelector('input')

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello')
  })
}

type User = {
  name: string,
  id: number
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]

const getUser = (users: User[]): string[] => {
  return users.map(user=>  user.name)
}

const result = getUser(users)
console.log(result)

function logMessage(message: string): void{
  console.log(message)
}
logMessage('Hello, world!');

type size = 'small' | 'medium' | 'large'

enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

const button2: size = 'medium'
const button3: Size = Size.medium

function add(num1: number, num2: number):number {
  return num1 + num2
}
console.log(add(2, 3))

function addd(num1: number, num2: number): void{
  console.log(num1+num2)
}

type Person = {
  name: string
}

function greeting(user:Person) :void{
  console.log(`Hello ${user.name}`)
}

type User2 = {
  name: string,
  age: number
}

function user2(name: string, age: number): User2{
  return {name, age}
}

type Car = {
  color: string,
  price: number,
  currency: string,
  start:(color:string)=>void
}
const car:Car = {
  color: 'red',
  price: 1000,
  currency: 'UAH',
  start(color) {
    console.log('Start' + this.color)
  },
}

//!-------------------------------------------
type User0 = {
  name: string;
  age: number;
  role?: string
}

const user01:User0 = {
  name: 'bob',
  age: 15
}

const user02:User0 = {
  name: 'ana',
  age: 10,
  role: "admin"
}

//!---------------------------Index properties
type Goods = {
  [key: string]: number
}

const fruits: Goods = {
  apples: 10,
  bananas:20
}

const vegetables: Goods = {
  potatoes: 50,
  carrots: 10,
  onions:30
}

//-----------------------------
type Info = {
  [key: string]: string | number
}

const userInfo: Info = {
  name: "Bob",
  age: 20,
  country: "Ukraine",
}

const bookDetails: Info = {
  title: 'Tails',
  pages: 350
}

//!---------------------------Generics
function identity<T>(arg: T): T{
  return arg
}

let output1 = identity<string>("myString")
let output2 = identity<number>(100)

console.log(identity(output1))

//-----------------------------
function reverse<T>(arg: T[]): T[]{
  return arg.reverse()
}

let numbers = reverse<number>([1, 2, 3, 4, 5])
console.log(numbers)

let string = reverse<string>(['a', 'b', 'c'])
console.log(string)

//!---------extends & keyof
function lengthOfObject<T extends{length:number}>(obj: T): number{
  return obj.length
}

lengthOfObject({
  name: 'bob',
  color: 'red',
  length: 10
})

//-----------------------------
function getProperty<T, K extends keyof T>(obj:T, key: K):T[K]{
  return obj[key]
}

const student = {
  name: "John",
  age: 25
}

let studentName = getProperty(student, "name")
console.log(studentName)

let studentAddress = getProperty(student, "address")
console.log(studentAddress)

//!---------Partial<T> (like patch(not put))
type Todo = {
  title: string,
  descr: string,
  completed: boolean
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo{
  return { ...todo, ...fieldsToUpdate }
}
  
  const todo1:Todo = {
    title: "Learn TypeScript",
    descr: "study basics",
    completed: false
}
  
const todo2 = updateTodo(todo1,{
  descr: "study generics"
})

console.log(todo2)

//!---------Readonly or ReadonlyArray(for array)
type Human = {
  name: string,
  age: number
}

const john: Readonly<Human> = {
  name: 'John',
  age: 50
}

john.age = 20 //can't change, only read

const newNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]
newNumbers.push(6) //only reading 
newNumbers[0] = 0 //

//!---------Pick<T, K>---(what to select)
type newPerson = {
  name: string,
  age: number,
  address: string
}

type PersonSummary = Pick<newPerson, 'name' | 'age'>

const johnSummary: PersonSummary = {
  name: 'John',
  age: 30
}

//!---------Omit<T, K>---(what to remove)
type OldPerson = {
  name: string,
  age: number,
  address: string
}

type PersonWithoutAddress = Omit<OldPerson, "address">

const johny: PersonWithoutAddress = {
  name: "Johny",
  age:50
}

//!---------Record<T, K>---(smth like enum)
type CityDatabase = Record<string, number>

const database: CityDatabase = {
  Kyiv: 2884000,
  Kharkiv: 1441000,
  Odesa: 1015000
}

database.Lviv = 721301

//!---------------------
function getPromise(): Promise<(string | number)[]>{
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50])
  })
}

getPromise().then((data) => {
  console.log(data)
})