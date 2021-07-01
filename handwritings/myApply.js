Object.defineProperty(Function.prototype,'myApply',{
        get: function () {
            return function myCallReturn(context){
                if(typeof this !=='function'){
                    throw new TypeError('Error')
                }
                const args = [...arguments][1]
                if(this.name === 'myCallReturn') {
                    const fn = [...arguments][0]
                    if(typeof fn !== 'function'){
                        throw new TypeError('Error')
                    }
                    return fn(...args)
                }else {
                    context = context || window
                    context.fn = this
                    delete context.fn
                    return  context.fn(...args)
                }
            }
        }
    }
)

Math.max.myApply(null, [1,2,3]);
