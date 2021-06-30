import {Button} from "antd";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import NiceModal, {
    createNiceModal,
    useNiceModal,
    modalReducer
} from './NiceModal'
const store = createStore(modalReducer)
const MyModal = createNiceModal('my-modal',()=>{
    return  (
        <NiceModal id='my-modal' title='Nice Modal'>
            1
        </NiceModal>
    )
})

const MyModalExample = ()=>{
    const modal = useNiceModal('my-modal')
    return (
        <>
            <Button
                onClick={()=>{
                    modal.show()
                }}
                type='primary'
            >show modal</Button>
            <MyModal/>
        </>
    )
}

export default ()=>{
    return (
        <Provider store={store}>
            <h1>Nice Modal</h1>
            <MyModalExample/>
        </Provider>
    )
}
