// function sayHelloToConsole() {
//     console.log('Hello')
// }
// sayHelloToConsole()

// function sayHello(name = 'anon') {
//     // if (name === undefined) {
//     //     name = 'Anon'
//     // }
//     // name = name || 'Anon' 
//     alert('Hello ' + name + '!')
// }
// sayHello('Fedya')
// sayHello()

// let adminName = 'Fedya'
// function logUser() {
//     let userName = 'Ivan Ivanich'
//     console.log(userName)
//     console.log(adminName)
//     return userName
// }
// logUser()
// console.log(userName)
// console.log(adminName)

// function getName() {
//     let myName = 'Fedya'
//     return myName
// }

// let user = getName()
// console.log(user)

// function makeCoffee(cups, withMilk) {
//     if (withMilk) {
//         return console.log('Варю ' + cups + ' кофе с молоком')
//     }
//     return console.log('Варю ' + ' кофе без добавок')
    
// }

// makeCoffee(24, false)
// makeCoffee(3, true)
// makeCoffee(8)
// let a = Number(prompt('Введите число a'))
// let b = Number(prompt('Введите число b'))

// function findMax(a, b) {
//     if (a === b) {
//         return 'Числа равны'
//     } else if (a > b) {
//         return a
//     } else if (b > a) {
//         return b
//     } 
// }
// findMax(a, b)
// console.log(findMax(a, b))
// prompt

// function showQuote(text, author) {
//     if (text && author) {
//         return(text + author)
//     } else if (text) {
//         return(text + "unknown author")
//     } else {
//         return
//     }
// }
//  console.log(showQuote("text", "author"))
//  console.log(showQuote("text"))
//  console.log(showQuote())

 

// function addOne(a) {
//   return a + 1
// }

// addOne(6)
// console.log(addOne(6));

function nextEven(num1) {
    if ((num1 % 2) === 0) {
      return console.log(Number(num1) + 2)
    }
    else {
      return console.log(Number(num1) + 1)
    }
  }

nextEven(prompt('Num1'))
nextEven(prompt('Num1 (проверить ещё раз)'))
