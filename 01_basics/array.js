function display(arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element);
    }
}


const arr =[1,2,3,4,5]
console.log(typeof(arr));
arr.push(23,20,2)
arr.unshift(6,0);  //add element at beginning 
//arr.shift()      //removes element from beginning

console.log(arr.includes(1))  //search element from arr rtn t/f
// display(arr)

console.log(arr);

const alpha = new Array('a','b','c','d')
//display(alpha)
let newarr = [...arr,...alpha]
console.log(newarr)