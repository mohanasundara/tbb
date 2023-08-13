 import{createSlice} from '@reduxjs/toolkit'

 const usersliece = createSlice({
    name:"updatee",
    initialState:{value:{uid:"hello up",uname:"old",uage:"g",ublood:"",udistic:"",uphone:""}},
   
    reducers:{
        valueset:(state,action)=>{
            state.value =action.payload
        }

    }
 })

 export const {valueset} = usersliece.actions;
 export default usersliece.reducer;