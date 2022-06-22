/**
 * interface 接口声明，是命名对象的另一种方式，像是一种约束
 * readonly: 只读
 * interface可以创建函数描述
 * interface可以创建可变属性 [propName]
 * interface不要将其和javascript数据类型强相关，它是允许自定义类型
 * duck typing：鸭子类型
 * interface 可以通过继承实现扩展，使用 extends
 */
interface Person {
  readonly id: number;
  name: string;
  age?: number
}

let viking: Person = {
  id: 1,
  name: 'viking',
  age: 12,
  // male: 'male' error 不能分配person中不存在的类型
}
viking.name = 'joy'
// viking.id = 2 error: id是只读属性

// 函数描述
const sum = (x: number, y: number) => {
  return x + y
}
interface ISum {
  (x: number, y: number): number
}
const sum2: ISum = sum  // sum 返回值必须是number

// 配置可变属性
interface RandomMap {
  [propName: string]: string
}
const test: RandomMap = {
  a: '123',
  b: 'hello',
}

interface LikeArray {
  [index: number]: string
}
const likeArray: LikeArray = ['1', '2', '2']
// likeArray[0]


// 自定义类型 - duck typing
interface FunctionWithProps {
  (x: number): number;
  name: string
}
const a: FunctionWithProps = (x: number) => {
  return x;
}
a.name = 'abc'