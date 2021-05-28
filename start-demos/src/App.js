import {useState} from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
import Modal from './components/Modal-portal/index'

function Profile(props) {
    return (
        <>
            {props.user.name}
        </>
    )
}

function App() {
    const [user, setUser] = useState({
        name: 'dog'
    })
    const [modalVisible, setModalVisible] = useState(true)
    return (
        <div className='App'>
            <ErrorBoundary>
                <div className='user-container'>
                    <Profile user={user}></Profile>
                    <button onClick={() => setUser(null)}>click</button>
                </div>
                {
                    modalVisible && <Modal onClose={()=>setModalVisible(false)}>hello modal</Modal>
                }
            </ErrorBoundary>

        </div>
    );
}

export default App;
