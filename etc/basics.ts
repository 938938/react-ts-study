// 기본 타입 : number, string, boolean
// 자료형 : arrays, objects
// Function types, parameters types(매개변수)

// 기본 타입(primitives)

let age: number = 20;
age = 12;

let userName: string;
userName = 'abc';

let isInstructor: boolean;
isInstructor = true;

// 자료형

let hobbies: string[]; // 문자열 배열 타입
// hobbies = ['cooking', 'sports', 12]; // 12에 오류 발생

// 타입 별칭
type Person = {
  name: string;
  age: number;
};

// let person: {
//   name:string,
//   age:number,
// };

let person: Person;

// let people : {
//   name:string,
//   age:number,
// }[]; // 함께 사용 가능 (객체 배열)

let people: Person[];

// 타입 추론 (type inference)

let course = 'react - typescript';
// course = 123; // 오류 발생. 위 선언문에서 string 타입을 받는다고 추론.
// 직접 타입을 지정하는 것보다는 이렇게 타입 추론을 사용하는 것이 일반적임

// 유니온 유형 - 한 개 이상의 타입을 지정
let study: string | number = 'react';
study = 123; // 오류 발생하지 않음

// 함수와 타입
function add(a: number, b: number) {
  return a + b;
}

function printConsole(value: any):void {
  console.log(value);
}
// void: null, undefined와 비슷하지만 항상 함수와 결합해서 사용. 함수에 반환값이 없음을 의미.

// 제네릭 - 함수에서만 사용.

function insertAtBeginning<T>(array:T[], value:T){
  // array와 value가 같은 타입을 가져야 함을 표시
  // 전달받은 값의 타입을 확인
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1) // [-1,1,2,3]
