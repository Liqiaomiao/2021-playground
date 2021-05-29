import React, {createRef, Component} from 'react'

// function MyFunctionComponent(){
//     return <input/>
// }
class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = createRef()
        this.childComponent = createRef()
    }
    componentDidMount() {
        console.log('childComponent',this.childComponent);
    }

    render() {
        return (
            <div ref={this.props.divEelmentRef}>
                <input type="text" ref={this.textInput} defaultValue='123'/>
                <input type="button" value='input focus' onClick={() => {
                    this.textInput.current.focus()
                }}/>
                { // 默认情况下，不能在函数组件上使用 ref 属性,因为他们没有实例
                    /* <MyFunctionComponent ref={this.childComponent}/>*/
                }
            </div>
        );
    }
}

export default CustomTextInput
