import React from "react";
import './index.scss'
class LifeCycle extends React.Component {
    constructor(props) {
        console.log("进入constructor");
        super(props);
        // state 可以在 constructor 里初始化
        this.state = { text: "子组件的文本" };
    }
    // 初始化/更新时调用
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps方法执行");
        return {
            fatherText: props.text
        }
    }
    // 初始化渲染时调用
    componentDidMount() {
        console.log("componentDidMount方法执行");
    }
    // 组件更新时调用
    shouldComponentUpdate(prevProps, nextState) {
        console.log("shouldComponentUpdate方法执行");
        return true;
    }

    // 组件更新时调用
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate方法执行");
        return "haha";
    }
    // 组件更新后调用
    componentDidUpdate(preProps, preState, valueFromSnapshot) {
        console.log("componentDidUpdate方法执行");
        console.log("从 getSnapshotBeforeUpdate 获取到的值是", valueFromSnapshot);
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
        console.log("render方法执行");
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
                <ExplainLifeCycle/>
                <button onClick={this.changeText} className="changeText">
                    修改父组件文本内容
                </button>
                <button onClick={this.hideChild} className="hideChild">
                    隐藏子组件
                </button>
                {this.state.hideChild ? null : <LifeCycle text={this.state.text} />}
            </div>
        );
    }
}
function ExplainLifeCycle(){
    return (
        <>
            <p>
                在React 16.4之后，React 生命周期在之前版本的基础上又经历了一次微调，其实就调在了更新过程的 getDerivedStateFromProps 这个生命周期上
            </p>
            <div className='lifecycle16'>
                <img src='lifecycle16.3.png' alt="lifecycle16.3"/>
                <img src="lifecycle16.4.png" alt="lifecycle16.4.png"/>
            </div>
            <div>
                <dl>
                    <dt>getDerivedStateFromProps</dt>
                    <dd>
                        getDerivedStateFromProps 这个 API，其设计的初衷不是试图替换掉 componentWillMount，而是试图替换componentWillReceiveProps，因此它有且仅有一个用途：使用 props 来派生/更新 state
                    </dd>
                    <dd>
                        getDerivedStateFromProps 在更新和挂载两个阶段都会“出镜”（这点不同于仅在更新阶段出现的 componentWillReceiveProps）。这是因为“派生 state”这种诉求不仅在 props 更新时存在，在 props 初始化的时候也是存在的
                    </dd>
                    <dd>
                        这个新生命周期方法的调用规则如下：static getDerivedStateFromProps(props, state)
                    </dd>
                    <dd>
                        getDerivedStateFromProps 是一个静态方法。静态方法不依赖组件实例而存在，因此你在这个方法内部是访问不到 this 的
                    </dd>
                    <dd>
                        该方法可以接收两个参数：props 和 state，它们分别代表当前组件接收到的来自父组件的 props 和当前组件自身的 state
                    </dd>
                    <dd>
                        getDerivedStateFromProps 需要一个对象格式的返回值。如果你没有指定这个返回值，那么大概率会被 React 警告一番，
                    </dd>
                    <dd>
                        getDerivedStateFromProps 方法对 state 的更新动作并非“覆盖”式的更新，而是针对某个属性的定向更新
                    </dd>
                </dl>
                <dl>
                    <dt>getSnapshotBeforeUpdate</dt>
                    <dd>
                        这个方法和 getDerivedStateFromProps 颇有几分神似，它们都强调了“我需要一个返回值”这回事。
                        区别在于 getSnapshotBeforeUpdate 的返回值会作为第三个参数给到 componentDidUpdate。
                        它的执行时机是在 render 方法之后，真实 DOM 更新之前。
                        在这个阶段里，我们可以同时获取到更新前的真实 DOM 和更新前后的 state&props 信息
                    </dd>
                    <dd>
                        尽管在实际工作中，需要用到这么多信息的场景并不多，但在对于实现一些特殊的需求来说，没它还真的挺难办
                    </dd>
                    <dd>
                        getSnapshotBeforeUpdate 要想发挥作用，离不开 componentDidUpdate 的配合
                    </dd>
                    <dd>
                        为什么 componentWillUpdate 就非死不可呢？说到底，还是因为它“挡了 Fiber 的路”。
                    </dd>
                </dl>
                <dl>
                    <dt>Fiber 架构简析</dt>
                    <dd>
                        Fiber 是 React 16 对 React 核心算法的一次重写。
                    </dd>
                    <dd>
                        关于 Fiber，你只需要 get 到这一个点：Fiber 会使原本同步的渲染过程变成异步的
                    </dd>
                    <dd>
                        同步渲染的递归调用栈是非常深的，只有最底层的调用返回了，整个渲染过程才会开始逐层返回。这个漫长且不可打断的更新过程，将会带来用户体验层面的巨大风险：同步渲染一旦开始，便会牢牢抓住主线程不放，直到递归彻底完成
                    </dd>
                    <dd>
                        而 React 16 引入的 Fiber 架构，恰好能够解决掉这个风险：Fiber 会将一个大的更新任务拆解为许多个小任务
                    </dd>
                </dl>
                <dl>
                    <dt>
                        换个角度看生命周期工作流
                    </dt>
                    <dd>
                        Fiber 架构的重要特征就是可以被打断的异步渲染模式。
                    </dd>
                    <dd>
                        但这个“打断”是有原则的，根据“能否被打断”这一标准，React 16 的生命周期被划分为了 render 和 commit 两个阶段，而 commit 阶段又被细分为了 pre-commit 和 commit
                    </dd>
                    <dd>
                        <ul>
                            <li>
                                render 阶段：纯净且没有副作用，可能会被 React 暂停、终止或重新启动。
                            </li>
                            <li>
                                pre-commit 阶段：可以读取 DOM
                            </li>
                            <li>
                                commit 阶段：可以使用 DOM，运行副作用，安排更新
                            </li>
                        </ul>
                        总的来说，render 阶段在执行过程中允许被打断，而 commit 阶段则总是同步执行的
                    </dd>
                </dl>
                <dl>
                    <dt>
                        细说生命周期“废旧立新”背后的思考
                    </dt>
                    <dd>
                        在 Fiber 机制下，render 阶段是允许暂停、终止和重启的。
                    </dd>
                    <dd>
                        当一个任务执行到一半被打断后，下一次渲染线程抢回主动权时，这个任务被重启的形式是“重复执行一遍整个任务”而非“接着上次执行到的那行代码往下走”。
                    </dd>
                    <dd>
                        这就导致 render 阶段的生命周期都是有可能被重复执行的
                    </dd>
                    <dd>
                        componentWillMount；
                        componentWillUpdate；
                        componentWillReceiveProps;
                        这些生命周期的共性，就是它们都处于 render 阶段，都可能重复被执行
                        而且由于这些 API 常年被滥用，它们在重复执行的过程中都存在着不可小觑的风险。
                    </dd>
                    <dd>
                        总的来说，React 16 改造生命周期的主要动机是为了配合 Fiber 架构带来的异步渲染机制。
                        在这个改造的过程中，React 团队精益求精，针对生命周期中长期被滥用的部分推行了具有强制性的最佳实践。
                        这一系列的工作做下来，首先是确保了 Fiber 机制下数据和视图的安全性，同时也确保了生命周期方法的行为更加纯粹、可控、可预测。
                    </dd>
                    <dd>
                        这些操作的问题（或不必要性）包括但不限于以下 3 点
                        <ol>
                            <li>
                                完全可以转移到其他生命周期（尤其是 componentDidxxx）里去做
                                比如在 componentWillMount 里发起异步请求,以为这样做就可以让异步请求回来得“早一点”，从而避免首次渲染白屏。
                                异步请求再怎么快也快不过（React 15 下）同步的生命周期。
                                componentWillMount 结束后，render 会迅速地被触发，所以说首次渲染依然会在数据返回之前执行。
                                这样做不仅没有达到你预想的目的，还会导致服务端渲染场景下的冗余请求等额外问题，得不偿失。
                            </li>
                            <li>
                                在 Fiber 带来的异步渲染机制下，可能会导致非常严重的 Bug。
                                试想，假如你在 componentWillxxx 里发起了一个付款请求。
                                由于 render 阶段里的生命周期都可以重复执行，在 componentWillxxx 被打断 + 重启多次后，就会发出多个付款请求。
                            </li>
                            <li>
                                componentWillReceiveProps  和 componentWillUpdate 里滥用 setState 导致重复渲染死循环的
                            </li>
                        </ol>
                    </dd>
                </dl>

            </div>
        </>
    )
}
export default LifeCycleContainer
