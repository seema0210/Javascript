let arr = [2,3,8,4,6,1,2,3,9,4]
let b = []
const greet = (a) => {
    for(var i of a){
        if(!(b.includes(i))){  // only push when val not present in b
            b.push(i)
        }
    }
    console.log(b)
    document.write(b)
}
greet(arr)