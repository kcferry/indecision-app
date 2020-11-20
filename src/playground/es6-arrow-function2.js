// Arguemtns Object - no longer bound with arrow functions


const add = (a, b) => {
    return a + b
}
console.log(add(55, 1))

// this keyword - no longer bound with arrow functions 

const user = {
    name: 'Kyle',
    cities: ['Falcarragh', 'Letterkenny', 'London'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`)
    }
}
console.log(user.printPlacesLived())


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())