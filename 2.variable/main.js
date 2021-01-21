let a = 1;
let b = "cyclone";
let c = "joker";

console.log(`姓名 ${b},年龄 ${a}`);
console.log(`姓名 ${false ?  '' : `a ${true ? b : 'test'}`}`);


console.log("----------------------");
let test = `${b} ${c}`;
console.log(test);

let d = b +" "+ c
console.log("字符串截取" + d.substring(0,5));
console.log("分割:"+ d.split(" "))


console.log("----------------------");

let v = [0,1,2];
v[5]=6;
console.log(v)


console.log("------------属性暴露----------");

let attribut = {
    name : "cyclone",
    age  :18,
    type :"joker",
    attribution : {
        test1 : null,
        arrays : [1,2,3,4],
        arrays2 : [1,2,3,4],
    }
}

let {
    name,
    age,
    attribution : {test1 , arrays},
    attribution
} = attribut

console.log(name);
console.log(age);
console.log(test1);
console.log(arrays);

console.log(attribution)

// let {
//     attribution
// }=attribut;

// console.log(attribution)


console.log("------------json转换----------");

attribut = [
    {
        name : "cyclone",
        age  :18,
        type :"joker",
        attribution : 
        {
            test1 : null,
            arrays : [1,2,3,4],
            arrays2 : [1,2,3,4],
        }
    },
    {
        name : "cyclone",
        age  :18,
        type :"joker",
        attribution : 
        {
            test1 : null,
            arrays : [1,2,3,4],
            arrays2 : [1,2,3,4],
        }
    },
]

const tojson = JSON.stringify(attribut);
console.log(tojson)
