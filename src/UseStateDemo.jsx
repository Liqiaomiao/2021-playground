import React, {useState} from 'react';
const initState = ()=>{
    console.log('initState working')
    return 0
}
/*
* get
* 1.惰性初始化：initialState 只会在组件的初始渲染中起作用，后续渲染会被忽略。
*   应用场景在于：初始state很昂贵，那么可以传入一个函数，返回计算后的state，此函数只在初始渲染时被调用。
* 2.直接更新：不依赖于旧值的更新
*   函数式更新：依赖于旧值的更新
* 3.更新方式：直接替换原state, 和类组件不同，因此推荐多个state变量，也利于后续相关state的抽离
* */
function App() {
    // Create the count state.
    const [count, setCount] = useState(initState);
    const plus = ()=>{
        setCount((prevCount)=>prevCount+1)
        setCount((prevCount)=>prevCount+1)
    }
    const mius = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return (
        <div className="App">
           <button onClick={plus}>+</button>
            <span>{count}</span>
            <button onClick={mius}>-</button>
        </div>
    );
}
// class App extends React.Component{
//     state={
//         count: 0,
//         name:'lisa'
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('componentDidUpdate');
//     }
//
//     plus(){
//         this.setState((data)=>{
//             console.log('plus working');
//             return {
//                count: data.count+1
//            }
//         })
//         // this.setState((data)=>{
//         //     return {
//         //         count: data.count+1
//         //     }
//         // })
//     }
//     minus(){
//         this.setState((data)=>{
//             console.log('minus working');
//             return {
//                 count: data.count-1
//             }
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 <button onClick={()=>this.plus()}>+</button>
//                 <span>{this.state.count}</span>
//                 <button onClick={()=>this.minus()}>-</button>
//             </div>
//         );
//     }
//
// }

export default App;
