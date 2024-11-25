
const osszead = (a, b) =>a+b
    
const kivon =(a, b)=>  a-b

const szoroz = (a, b) =>a*b

const oszt = (a, b) => 
{
    let result = a/b
    return result
}

const muvelet = (a,b, fgv) => fgv(a,b)

console.log(osszead(4,5))
console.log(kivon(10,6))
console.log(szoroz(10,6))
console.log(oszt(81,9))
console.log(muvelet(10,80,osszead))