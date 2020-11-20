var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Kyle'
console.log('nameLet', nameLet)

const nameConst = 'Frank'

console.log('nameConst', nameConst)

// Block Scoping

var fullName = 'Lee Ferry'
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0]
     
}


console.log(firstName)
