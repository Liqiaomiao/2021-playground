const compose =(...funcs) =>{
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => {
        return (...args) =>{
            console.log('a === ', a);
            console.log('b === ', b);
            return  b(a(...args))
        }
    })
}
const name = "Bhargav Bachina";
const splitName=(name)=>{
    return name.split(' ')
}
const countEachName = (nameArray)=>{
    nameArray.map((name)=>{
        console.log("Name:::::"+name);
        console.log("Count::::"+name.length);
    })
    return nameArray
}
const comvertUpperCase = (nameArray)=>{
    return nameArray.map(name=>name.toUpperCase())
}
console.log('get nameArray',compose(splitName, countEachName, comvertUpperCase)(name));


