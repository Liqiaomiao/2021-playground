import React,{useState,useEffect,useRef} from "react";
/*
* get
* 第一个参数，为一个函数，用于编写需要执行的副作用
* 第二个参数为数组，作为依赖更新的数据
* 1.当没有第二个参数时，每次数据变更都会触发useEffect，相对于class组件，可避免重复didmount和didupdate中相同的操作
* 2.传入依赖更新的数据，只有在依赖发生变化才会触发(didmount,didupdate)
* 3.只有组件初始化需要触发，传入空数组
* 4.为防止内存泄漏，清除函数会在组件卸载前执行；
* 如果组件多次渲染，会在执行下一个 effect 之前，上一个 effect 就已被清除，
* 即先执行上一个 effect 中 return 的函数，然后再执行本 effect 中非 return 的函数。
* // MOUNTED
// side effect

// RE-RENDER 1:
// clean up
// side effect

// RE-RENDER 2:
// clean up
// side effect

// UN-MOUNT:
// clean up
* */
function UseEffectDemo(){
    const [resourcType,setResourcType] = useState('posts')
    const current = useRef()
    useEffect(()=>{
        setTimeout(()=>{
            console.log('has dependence data',resourcType);
            },1000)
        return ()=>{
            console.log('clean');
        }
    },[resourcType])
    console.log('render');
    return (<div>
        <button onClick={()=>setResourcType('posts')}>posts</button>
        <button onClick={()=>setResourcType('users')}>users</button>
        <button onClick={()=>setResourcType('comments')}>comments</button>
        {resourcType}
    </div>)
}
// class UseEffectDemo extends  React.Component{
//     state={
//         resourcType: 'post'
//     }
//     setResourcType(resourcType){
//         this.setState({
//             resourcType
//         })
//     }
//     componentDidMount(prevProps, prevState, snapshot) {
//         setTimeout(() => {
//             console.log('componentDidMount get====', this.state.resourcType);
//         }, 2000)
//         console.log('componentDidMount');
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         // for(var i=0;i<1000;i++){
//         //     console.log('changed');
//         // }
//         console.log('componentDidUpdate');
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//     }
//
//     render() {
//         console.log('render');
//         return (
//             <div>
//                 <button onClick={() => this.setResourcType('posts')}>posts</button>
//                 <button onClick={() => this.setResourcType('users')}>users</button>
//                 <button onClick={() => this.setResourcType('comments')}>comments</button>
//                 {this.state.resourcType}
//             </div>)
//     }
// }
export default UseEffectDemo
