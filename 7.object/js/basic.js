const test = 
{
    firstName   :"cyclone",
    secondName  :"joker",
    age         :18,
    getsum      : function(){
        return `高声呼喊我的名字：${this.firstName} and ${this.secondName}`;
    },
    roar        :function(){
        console.log("高声呼喊我的名字");
    }
}

console.log(test.getsum)  //属性中的函数不加（）只是字符而已
console.log(test.getsum())//加上（）才是调用方法
test.roar();//类似于对象的方法
// console.log(test)

console.log("values,keys-----------------")
console.log(Object.values(test))
console.log(Object.keys(test))

for(let i of Object.keys(test)){
    console.log(`${i} : ${test[i]}`)
}