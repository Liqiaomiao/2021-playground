// 递归、WeakMap循环引用、多种类型，参考 https://juejin.cn/post/6844903929705136141

// 可以继续遍历的类型
const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'

const deepTag = [mapTag, setTag, arrayTag, objectTag]
// 不可以继续遍历的类型
const booleanTag = '[object Boolean]'
const dateTag = '[object Date]'
const errrorTag = '[object Error]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const funcTag = '[object Function]'

function isObject(target) {
    const type = typeof target
    return (target !== null) && (type === 'object' || type === 'function')
}

function getType(target) {
    return Object.prototype.toString.call(target)
}

function getInit(target) {
    const Ctor = target.constructor
    return new Ctor(target)
}

function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target))
}

function cloneOtherType(target, type) {
    const Ctor = target.constructor
    switch (type) {
        case booleanTag:
        case numberTag:
        case stringTag:
        case errrorTag:
        case dateTag:
            return new Ctor(target);
        case regexpTag:
            return new RegExp(target);
        case symbolTag:
            return cloneSymbol(target);
        case funcTag:
            return target;
        default:
            return null;
    }

}

function clone(target, map = new WeakMap()) {
    if (!isObject(target)) {
        return target
    } // 直接返回原始类型
    const type = getType(target)
    let cloneTarget;
    if (deepTag.includes(type)) { // 可以继续遍历的类型
        cloneTarget = getInit(target)
    } else {
        return cloneOtherType(target,type)
    }
    if(map.get(target)){
        return map.get(target)
    }
    // 循环引用
    map.set(target,cloneTarget)
    // clone Map
    if(type === mapTag){
        target.forEach((item,key)=>cloneTarget.set(key,clone(item,map)))
        return cloneTarget
    }
    // clone Set
    if(type === setTag){
        target.forEach((item,key)=>cloneTarget.add(clone(item,map)))
        return cloneTarget
    }

    // clone array & object
    cloneTarget = type === arrayTag?[]:{}
    for (const key in target) {
        cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
}

const map = new Map();
map.set('key', 'value');
map.set('ConardLi', 'code秘密花园');

const set = new Set();
set.add('ConardLi');
set.add('code秘密花园');
Object(Symbol('hi'))
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        console.log('code秘密花园');
    },
    func2: function (a, b) {
        return a + b;
    }
};


const result = clone(target);

console.log('result', result);
