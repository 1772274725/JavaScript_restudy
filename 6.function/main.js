function test1(cyclone,joker){
    console.log(cyclone);
    console.log(joker);
}
test1(joker=1,cyclone=2);


console.log("箭头函数---------------");
const test2 = (num1 =1,num2 = 2) =>{
    return num1+num2;
}
console.log(test2())
console.log(test2(2,2))

const test3 = (num1 = 4,num2 =2)=>console.log(num1+num2);
test3()

let test4 = (num1 = 4,num2 = 5)=>num1+num2;
console.log(test4())

let test5 = num1=>num1+24;
console.log(test5(2))


let arr = [1,2,3,4,5,6,7,8,8,9]
arr.forEach(t=>console.log(t+20));

