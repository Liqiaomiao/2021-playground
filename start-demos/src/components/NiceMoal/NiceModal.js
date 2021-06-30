import {useCallback, useMemo} from "react";
import {Modal} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
/*
*
// 通过 create API 创建一个对话框，主要为了能够全局的控制对话框的展现
const UserInfoModal = NiceModal.create(
  'user-info-modal',
  RealUserInfoModal
);

// 创建一个 useNiceModal 这样的 Hook，用于获取某个 id 的对话框的操作对象
const modal = useNiceModal('user-info-modal');
// 通过 modal.show 显示一个对话框，并能够给它传递参数
modal.show(args);
// 通过 modal.hide 关闭对话框
modal.hide();
* */
const modalCallbacks = {}
export const modalReducer = (state = {hiding: {}}, action) => {
    switch (action.type){
        case 'nice-modal/show':
            return {
                ...state,
                [action.payload.modalId]: action.payload.args || true,
                hiding: {
                    ...state.hiding,
                    [action.payload.modalId]:false
                }
            };
        case 'nice-modal/hide':
            return action.payload.force
                ? {
                    ...state,
                    [action.payload.modalId]: false,
                    hiding: {
                        [action.payload.modalId]: true
                    }
                }
                : {
                    ...state,
                    hiding: {
                        [action.payload.modalId]: true
                    }
                }


        default:
            return state;
    }
}

/*
* NiceModal： modal展示
* 展示弹窗内容并且控制modal 显隐
* */
const NiceModal = ({id, children, ...rest}) => {
    const modal = useNiceModal(id)
    return (
        <Modal
            onCancel={() => modal.hide()}
            onOk={() => modal.hide()}
            afterClose={() => modal.hide(true)}
            visible={!modal.hiding}
            {...rest}
        >
            {children}
        </Modal>
    )
}
const showModal = (modalId, args) => {
    return {
        type: 'nice-modal/show',
        payload: {
            modalId,
            args
        }
    }
}
const hideModal = (modalId, force) => {
    return {
        type: 'nice-modal/hide',
        payload: {
            modalId,
            force
        }
    }
}
/*
* useNiceModal 存储弹窗的显示隐藏状态，以及控制隐藏的方法
* return visible \hide \ show \ resolve
* */
export const useNiceModal = (modalId) => {
    const dispatch = useDispatch()

    const show = useCallback((args) => {
        return new Promise((resolve => {
            modalCallbacks[modalId] = resolve
            dispatch(showModal(modalId, args))
        }))

    }, [dispatch, modalId])
    const hide = useCallback((force)=>{
        dispatch(hideModal(modalId,force))
    },[dispatch,modalId])
    const resolve = useCallback((args)=>{
        if(modalCallbacks[modalId]){
            modalCallbacks[modalId](args)
            delete modalCallbacks[modalId]
        }
    },[modalId])
    const args = useSelector(s=>s[modalId])
    const hiding = useSelector(s=>s.hiding[modalId])
    return useMemo(() => ({args, hide, show, hiding,visible:!!args,resolve}), [args, hide, show, hiding,resolve])
}

/*
* createNiceModal 用于控制弹窗是否保留dom
* */
export const createNiceModal = (modalId, Comp) => {
    return (props) => {
        const {visible, args} = useNiceModal(modalId)
        if (!visible) {
            return null
        }
        return <Comp {...props} {...args}/>
    }
}
NiceModal.create = createNiceModal
NiceModal.useModal = useNiceModal
export default NiceModal
