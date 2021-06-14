import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
        secondAction : (data) => ({
            type: 'SECOND',
            payload: 'hi',
        }),

        firstAction : () => {
            debugger
            return (dispatch) => {
                const response = dispatch({
                    type: 'FIRST',
                    payload: new Promise((resolve,reject)=>{resolve('1')}),
                })
                console.log('response',response);
                response.then((data) => {
                    dispatch(this.secondAction(data))
                })
            }
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer
