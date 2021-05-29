import React, {forwardRef, Component, createRef} from 'react'

const ForwardRefDemo = forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">{props.children}</button>
))

class ForwardRefWrapper extends Component {
    constructor(props) {
        super(props);
        this.state={}
        this.buttonRef = createRef()
    }
    componentDidMount() {
        console.log('buttonRef',this.buttonRef.current);
    }

    render() {
        return (
            <div>
                <ForwardRefDemo ref={this.buttonRef}>
                    ForwardRefDemo
                </ForwardRefDemo>
            </div>
        )
    }
}
export default ForwardRefWrapper
