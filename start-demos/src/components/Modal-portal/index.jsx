import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Index extends Component {
    render() {
        return (
            ReactDOM.createPortal(
                <div className='modal-contaniner'>
                    <div className='modal'>
                        <header>
                            <button className='close' onClick={this.props.onClose}>close</button>
                        </header>
                        <main className='container'>
                            {this.props.children}
                        </main>
                    </div>
                    <div className='marsk'></div>
                </div>,
                document.body)

        )
    }
}

export default Index
