import {createSlice} from '@reduxjs/toolkit';


const usersliece = createSlice({
    name:'user',
    initialState:{value:{name:"babu"}},
    reducers:{
        login:(state,action)=>{
            state.value =action.payload
        }
    }
})

export const {login}  =  usersliece.actions;
export default usersliece.reducer;