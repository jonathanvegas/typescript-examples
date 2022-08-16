let age: number = 42;
let firstName: string = 'Jonathan';
let active: boolean = true;
//let names: string[] = [1,2,3,4] give us an error
let names: string[] = ['Susana', 'Luciana', 'Zaynel'];

// enum studentTypes {
//   pending,
//   active,
//   almostdone,
//   presenting,
//   graduated,
//   tas,
//   teachers
// }

// let code: string | number = '11';
// code = 11;
// console.log(`my entry code is: ${code}`)

// function sum (arr : Number[]){
//   return arr.length
//   //return arr.reduce((total: number, num: number) => total + num)
//   //return arr.reduce((previousValue: number, currentValue: number) => {return previousValue + currentValue})

// }

let numbers: number[] = [1,2,3,4,5,6]

let complexItem: any = { name: 'damian'}
complexItem = { title: 'proffesor'}
complexItem = "it's a string"
complexItem = 22;
console.log('complexItem', complexItem)

//console.log(sum(numbers))
// const myStatus = studentTypes.graduated

// switch (Number(myStatus)){
//   case Number(studentTypes.active):
//       console.log('Student is Active')
//     break;
//   case Number(studentTypes.graduated):
//       console.log('Student is graduated')
//     break;
//   default:
//       console.log("No Status")

// }


// console.log(myStatus);
// if (myStatus == studentTypes.graduated){
//   console.log('the student is graduated')
// }

// console.log(studentTypes);
// console.log(names);
// console.log(`My first name is ${firstName}, my age is ${age}`);

interface human{
  name: string,
  age: number,
  height: number,
  bloodType: bloodType
}

enum bloodType{
  aPositive,
  bPositive,
  oNegative,
  oPositive,
}

const me: human = {
  name: 'bobby',
  age: 49,
  bloodType: bloodType.aPositive,
  height: 3 * 2
}

console.log(me)