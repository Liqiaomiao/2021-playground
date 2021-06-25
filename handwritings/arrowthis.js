// 箭头函数没有自己的this，而是继承父作用域自己的this
// https://mp.weixin.qq.com/s/8PwLaB_yGdKDgaM6PPcuiA
{ // 对象中定义的函数使用箭头函数是不合适的。
    var person = {
        name:'张三',
        age:18,
        getName:function(){
            console.log('我的名字是：'+this.name)
        },
        getAge:()=>{
            console.log('我的年龄是：'+this.age)
        }
    }

    person.getName() // 我的名字是张三
    person.getAge()  // 我的年龄是undefined;
    // person.getAge() 执行时，此时的作用域指向 window
}

{//不支持call()/apply()函数特性
    var person={
        name:'张三',
        getName(arg){
            let fn = v=>v+this.name
            let boy={
                name:'李四'
            }
            return fn.call(boy,arg)
        }
    }
    console.log(person.getName('我是')); // 我是张三

}
{// 不绑定arguments
    var fun = ()=>{
        console.log(arguments);
    }
    fun(123) // 报错： ReferenceError: arguments is not defined
    var fn=(...args)=>{
        console.log(args);
    }
    fn(456)
}
{// 没有prototype属性
    var fn=()=>{}
    fn.prototype //undefined
}
{// 原型函数不能定义成箭头函数，其中的this 指向全局对象
    function Person(name) {
        this.name = name
    }
    Person.prototype.say=()=>{
        console.log(this.name);}
}
