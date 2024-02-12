const colors = ['red','green','blue','yellow','orange']
const res = colors.splice(2,2, "puple", "pink")
console.log(res)
console.log(colors)

// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
const color = ['red','green','blue','yellow','orange']
const resu = color.copyWithin(0,1,3)
console.log(resu)

const colour = ['red','green','blue','yellow','orange']
const result = colour.join(",")

// Apply the find() method to find the first element in the colors array that starts with the letter b.
const colors1 = ['red','green','blue','yellow','orange']
const startB=(a)=>{
    if(a.startsWith('b')){
        return a
    }
}
console.log(colors1.find(startB))
//finally,transform all elements of the colors array to uppercase using the toUpperCase() method.
const colors2 = ['red','green','blue','yellow','orange']
const changed=colors2.toString().toUpperCase()
console.log(changed)