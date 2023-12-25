let a = [2,3,6,8,9,5,7]
let b = [6,8,0,2,4,51,-5]
let c = []


const merge = () =>{
    for(var i=0; i<a.length; i++){
        for(var j=0; j<b.length; j++){
            if(a[i] == b[j]){
                c.push(a[i])
            }
        }
    }
    console.log('first', c)
}
merge()

// using includes method
const greet = () => {
   for(var i=0; i<a.length; i++){
    if(b.includes(a[i])){
        c.push(a[i])
    }
   }
   console.log('second',c)
}
greet()