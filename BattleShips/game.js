let location1 = 5
let location2 = 6
let location3 = 7
let currentShot
let shots = 0
let hits = 0
let isSunk = false

location1 = Math.floor(Math.random()*9)
console.log(location1)
location2 = Math.floor(Math.random()*9)
console.log(location2)
location3 = Math.floor(Math.random()*9)
console.log(location3)

while (isSunk === false) {
    currentShot = Number(prompt('Введите число от 0 до 9'))
    console.log(currentShot)
    shots += 1
    if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
        hits += 1
        alert('Успешное попадание!')
    } 
    else {
            alert('Промах')
        }
        if (hits === 3) {
            isSunk = true
            alert('Корабль утонул. Победа!')
        }
    }

    console.log(hits)
    console.log('Координаты корабля', location1, ' ', location2, ' ', location3)
    console.log('Статистика выстрелов:', shots, 'Точность',Math.floor((hits/shots)*100),'%')
