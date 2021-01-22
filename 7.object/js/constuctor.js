function Test1(firstname,secondname,age = 18)//构造器（类）的首字母大写
{   //可以有初始值
    //这里的this类似于Python的self
    this.firstname      = firstname;
    this.secondname     = secondname;
    this.age            = age;
    // var dd= 12;//这么声明构造器无法见到
    this.roar =()=>this.firstname+this.secondname//方法也需要加this
}

Test1.fx="2";
const rider1 = new Test1()//可以先不写，只创建对象
console.log(rider1);
const rider2 = new Test1("cyclone","joker",200)
console.log(rider2)
rider2.battle="xiuka"
console.log(rider2)//还可以添加不存在属性mdzz
console.log(rider2.roar())
