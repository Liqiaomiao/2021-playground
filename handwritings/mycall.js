Object.defineProperty(Function.prototype,'myCall',{
    get: function () {
        return function myCallReturn(context){
            if(typeof this !=='function'){
                throw new TypeError('Error')
            }
            const args = [...arguments].slice(1)
            if(this.name === 'myCallReturn') {
                const fn = [...arguments][0]
                if(typeof fn !== 'function'){
                    throw new TypeError('Error')
                }
                return fn(...args)
            }else {
                context = context || window
                context.fn = this
                delete  context.fn
                return  context.fn(...args)
            }
        }
    }
}
)

Math.max.myCall(null, 1,2,3);
