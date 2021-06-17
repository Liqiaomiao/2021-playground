import React, {Component} from "react";
import './index.less'
// 定义子组件
class LifeCycle extends Component {
    constructor(props) {
        console.log("进入constructor");
        super(props);
        // state 可以在 constructor 里初始化
        this.state = {text: "子组件的文本"};
    }

    // 初始化渲染时调用
    componentWillMount() {
        console.log("componentWillMount方法执行");
    }

    // 初始化渲染时调用
    componentDidMount() {
        console.log("render方法执行", document.body.querySelector('.fatherContainer'));
        console.log("componentDidMount方法执行");
    }

    // 父组件修改组件的props时会调用
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps方法执行");
    }

    // 组件更新时调用
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate方法执行");
        return true;
    }

    // 组件更新时调用
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate方法执行");
    }

    // 组件更新后调用
    componentDidUpdate(preProps, preState) {
        console.log("componentDidUpdate方法执行");
    }

    // 组件卸载时调用
    componentWillUnmount() {
        console.log("子组件的componentWillUnmount方法执行");
    }

    // 点击按钮，修改子组件文本内容的方法
    changeText = () => {
        this.setState({
            text: "修改后的子组件文本"
        });
    };

    render() {
        return (
            <div className="container">
                <button onClick={this.changeText} className="changeText">
                    修改子组件文本内容
                </button>
                <p className="textContent">{this.state.text}</p>
                <p className="fatherContent">{this.props.text}</p>
            </div>
        );
    }
}

// 定义 LifeCycle 组件的父组件
class LifeCycleContainer extends React.Component {

    // state 也可以像这样用属性声明的形式初始化
    state = {
        text: "父组件的文本",
        hideChild: false
    };
    // 点击按钮，修改父组件文本的方法
    changeText = () => {
        this.setState({
            text: "修改后的父组件文本"
        });
    };
    // 点击按钮，隐藏（卸载）LifeCycle 组件的方法
    hideChild = () => {
        this.setState({
            hideChild: true
        });
    };

    render() {
        return (
            <div className="fatherContainer">
                <div style={{display: 'flex', padding: '30px'}}>
                    <div>
                        <div>
                            <h2>mouting 阶段</h2>
                            <dl>
                                <dt>constructor</dt>
                                <dd>该方法仅在挂载的时候调用一次，用于state初始化</dd>
                                <dt>
                                    render
                                </dt>
                                <dd>
                                    <ul>
                                        <li>
                                            render在执行过程中并不会去操作真实dom(也就是不会渲染)，它的职能是把要渲染的内容返回出来。
                                            真实dom的渲染工作，在挂载阶段是由ReactDOM.render 来承接的
                                        </li>
                                        <li>
                                            伴随着对虚拟 DOM 的构建和对比
                                        </li>
                                    </ul>
                                </dd>
                                <dt>
                                    componentDidMount
                                </dt>
                                <dd>
                                    componentDidMount 方法在渲染结束后被触发,可执行dom操作、异步请求、
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <h2>Updating 阶段</h2>
                            <dl>
                                <dt>componentReceiveProps</dt>
                                <dd> 并不是由 props 的变化触发的，而是由父组件的更新触发的,如果子组件只想处理更改，
                                    请确保当前值与变更值的比较
                                </dd>
                                <dt>
                                    shouldComponentUpdate(nextProps,nextState)
                                </dt>
                                <dd>
                                    为了避免不必要的 render 操作带来的性能开销，react 为我们提供了
                                    shouldComponentUpdate 这个钩子<br/>
                                    react会根据 shouldComponentUpdate 的返回值来决定是否执行该方法
                                    之后的生命周期，进而决定是否对组件进行re-render。<br/>
                                    有条件的re-render: 1. shouldComponentUpdate 中添加逻辑
                                    2. 在项目中引入pureComponent
                                </dd>
                                <dt>
                                    componentWillUpdate
                                </dt>
                                <dd>
                                    render前触发，允许你在里面做一些不涉及真实dom操作的准备工作
                                </dd>
                                <dt>
                                    componentDidUpdate
                                </dt>
                                <dd>
                                    组件更新完毕后触发，这个生命周期常用来处理dom操作
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <h2>Ummounting 阶段</h2>
                            <dl>
                                <dt>componentWillUnmount</dt>
                                <dd>
                                    触发：
                                    1. 组件在父组件中被移除了。
                                    2. 组件中设置了key属性，在render过程中，key和上一次不一致。
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <img src="lifecycle15.png" alt="lifecycle15" width="700"/>
                </div>
                <div>
                    <button onClick={this.changeText} className="changeText">
                        修改父组件文本内容
                    </button>
                    <button onClick={this.hideChild} className="hideChild">
                        隐藏子组件
                    </button>
                    {this.state.hideChild ? null : <LifeCycle text={this.state.text}/>}
                </div>
            </div>
        );
    }
}

export default LifeCycleContainer
