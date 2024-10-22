import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TInitialState = {
    userId: string;
    status: string;
}


const initialState : TInitialState = {
    userId: '',
    status: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SetUserId:(state,action: PayloadAction<string>)=>{
            state.userId=action.payload
        },
        SetStatus:(state,action: PayloadAction<string>)=>{
            state.status=action.payload
        },
    }
})


export const { SetUserId, SetStatus } = userSlice.actions;

const userSliceReducer = userSlice.reducer;
export default userSliceReducer;