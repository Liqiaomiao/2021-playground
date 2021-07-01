{   /*组合继承
      通过指定子类的原型到父类实例的方式继承父类原型的方法
      通过 call继承父类的属性
      优点：不会与父类共用属性、同时可以拥有父类的方法
      缺点：需要创建多余的父类的实例，存在内存上的浪费
     */
    function Parent(value){
        this.value = value
    }
    Parent.prototype.getValue = function() {
        console.log(this.value)
    }
    function Child(value){
        Parent.call(this,value)
    }
    Child.prototype = Parent.prototype
    const child = new Child(1)
}

{
    /*
    * 寄生组合继承
    * 将父类的原型给了子类，并将构造函数设为子类
    * */
    function Parent(value){
        this.value = value
    }
    Parent.prototype.getValue = function() {
        console.log(this.value)
    }
    function Child(value){
        Parent.call(this,value)
    }
    Child.prototype = Object.create(Parent.prototype,{
        constructor:{
            value:Child,
            enumerable:false,
            writable:true,
            configurable:true
        }
    })
    const child = new Child(1)
    console.log(child);
}
