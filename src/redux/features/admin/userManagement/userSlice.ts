import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TInitialState = {
    userId: string;
}


const initialState : TInitialState = {
    userId: '',
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SetUserId:(state,action: PayloadAction<string>)=>{
            state.userId=action.payload
        },
    }
})


export const { SetUserId } = userSlice.actions;

const userSliceReducer = userSlice.reducer;
export default userSliceReducer;