/**
 * typescript basic types
 * 1.为什么添加类型？：1. 1为了代码补全，可以直接使用类型上的方法；1.2 类型检查，可以提高代码的可读性
 * 2.undefined和null区别：
 *  1. undefined是一个类型，null是一个值；
 *  2. undefined和null是不可以赋值的，但是可以被赋值给其他类型(是其他类型的子类型)
 * 3.Any: 用来表示允许赋值为任意类型。（如果有明确类型的时候，尽量避免使用any，因为any可以调用任意的属性和方法，很可能出现错误）
 * 4.Tuple: 元组类型，表示一个已知元素数量和类型的数组，各元素的类型不必相同（数组越界可以使用数组push方法添加元素，但必须是已定义的类型）
 * 5.Array: 两种定义方式： 1.元素类型+[]   2.使用数组泛型 Array<number>
 * 6.Function: 函数声明方式
 *  1.函数声明：function名称(参数列表):返回值类型; 
 *  2.函数表达式：(参数列表):返回值类型 => {函数体}
 * 7.类型推论：当把一个遍历赋值给另外一个变量的时候，这个变量会自动获得一个类型，称为 类型推论（type inference
 */

/* 简单类型 */
// Boolean
let isDone: boolean = false

// Number
let age: number = 10

// String 
let firstName: string = 'viking'
let message: string = `hello, ${firstName}`

// Undefined
let u: undefined = undefined

// Null
let n: null = null

// Any
let notSure: any = null
notSure = 'maybe a string'
notSure = true
notSure.name
notSure.getName()

// Array 方式一：元素类型+[]  方式二：使用数组泛型 Array<元素类型>
let list: number[] = [1, 2, 3]
let list2: Array<string> = ['1', '2', '3']

// Tuple
let user: [string, number] = ['viking', 10]
user = ['joy', 20]
// user[3] = 'hello' // error, 数组越界
user.push(25)

// Function 函数声明方式
function add(x: number, y: number): number {
  return x + y
}
let result = add(1, 2)
const add2 = (x: number, y: number): number => {
  return x + y
}
// 注意：此处‘=>’ 不是ES6中的箭头函数，而是ts中声明函数返回值的方法
const add3: (x: number, y: number) => number = add2

