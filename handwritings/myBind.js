Function.prototype.myBind = function (context) {
  if(typeof this!=='function') {
    throw new TypeError('Error')
  }
  const _this = this
  const bindArgs = [...arguments].slice(1)
  return function F(){
    console.log('this is',_this,context);
    if(this instanceof F){
      return new F(...arguments,...bindArgs)
    }else{
      return _this.apply(context,[...arguments,...bindArgs])
    }
  }
}
function foo(){
  console.log(this.age)
}
const bar = foo.myBind({age:18},1)
bar(2,3,4)

