import {createSlice} from "@reduxjs/toolkit";

type TInitialState = {
    blockModalOpen: boolean
}


const initialState : TInitialState = {
    blockModalOpen: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        SetBlockModalOpen:(state,action)=>{
            state.blockModalOpen=action.payload
        },
    }

})


export const { SetBlockModalOpen } = modalSlice.actions;

const modalSliceReducer = modalSlice.reducer;
export default modalSliceReducer;