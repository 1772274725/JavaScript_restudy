for(let i = 0;i <= 6;i++){
    console.log(`第 ${i+1} 个`);
}

var arr = ["a","b","c","d"];
arr[10]="joker";
var obj = [{
    name:"echolun",
    age:1,
    sex:"male"
},
{
    name:"echolun",
    age:2,
    sex:"male"
},
{
    name:"echolun",
    age:3,
    sex:"male"
},
]

for (let i of arr){
    console.log(i);
}//中间空的也会打印

for(let i of obj){
    console.log(`属性名为${i.age}`)
}//可以用来访问类数组中的某个属性

console.log("------------------------------");

var obj1 = [{
    name:"echolun",
    age:1,
    sex:"male"
},
{
    name:"echolun",
    age:2,
    sex:"male"
},
{
    name:"echolun",
    age:3,
    sex:"male"
},
]
obj1.forEach(
    function(a){
        console.log(a.age);
    }
)


void function(){
    console.log("匿名函数")
}()

console.log("map------------------------------");
const t=obj.map(
    function(nmd){
        nmd.age ++;
        console.log(nmd.age);
        return nmd;//每一个return的项都会成为新数组中的一项
    }
    )
    
console.log(t)

console.log("filter------------------------------");
var obj2 = [{
    name:"echolun",
    age:1,
    sex:"male"
},
{
    name:"echolun",
    age:2,
    sex:"male"
},
{
    name:"echolun",
    age:3,
    sex:"male"
},
]
const faker = obj2.filter(
    function(test){
        return test.age == 1;
    }
)
console.log(faker)
