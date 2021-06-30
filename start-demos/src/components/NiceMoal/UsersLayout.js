import {createStore} from 'redux'
import {Provider} from "react-redux";
import {modalReducer, useNiceModal} from "./NiceModal";
import UserList from "./UserList";
import UserInfoMoadl from "./UserInfoMoadl";
const store = createStore(modalReducer);

function UserLayout() {

    return (
        <>
            <UserList/>
            <UserInfoMoadl/>
        </>
    )
}
export default ()=>{
    return (
        <Provider store={store}>
            <UserLayout/>
        </Provider>
    )
}
