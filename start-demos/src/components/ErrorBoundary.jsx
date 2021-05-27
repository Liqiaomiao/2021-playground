import React,{Component} from 'react'
 /*
 * 错误边界是一种react组件
 * 1.可捕获发生在其子组件树任何位置的javascript错误
 * 2.并打印这些错误，同时展示降级ui,而不会渲染那些发生崩溃的子组件树
 * 无法捕获的错误
 * 1.异步代码
 * 2.服务端渲染
 * 3.自身抛出来的错误
 * 4.事件处理
 * */
class ErrorBoundary extends Component{
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        // 错误日志上报之类
        console.log('error',error, errorInfo)
    }
    render() {
        if(this.state.hasError){
            return <h1>Oops, something went wrong.</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary
