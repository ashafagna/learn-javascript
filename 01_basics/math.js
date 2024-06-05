console.log(Math.PI)
const min=1,max=6
let dice=Math.floor((Math.random()*(max+1-min))+min)
console.log(dice)



const today = new Date()
console.log(today);
console.log(today.toString())
console.log(today.toDateString());
console.log(today.toLocaleString('default',{weekday:'long' ,month:"2-digit"}));

console.log(today.toLocaleTimeString());
console.log(today.getUTCDay())