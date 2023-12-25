let Safari = {
    brand : 'India',
    model : 'Tata Safari',
    year : 2021
}

let Mercedes = {
    brand : 'German',
    model : 'Benz GLE',
    year : 1926
}

let obj = {}

const greet = (a,b) => {
    for(var key in a){
        if(a.hasOwnProperty(key)){
            obj[key] = a[key]
        }
    }
    for(var key in b){
        if(b.hasOwnProperty(key)){
            obj[key] = b[key]
        }
    }
    console.log(obj)
}
greet(Safari,Mercedes)


// call method use here
// another method to use two objects with single function

function mergeObj(name){
    console.log(`${name} with model ${this.model} and brand ${this.brand}. Year of car is ${this.year} `)
}
mergeObj.call(Safari,'Safari')
mergeObj.call(Mercedes,'Mercedes')
