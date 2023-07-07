import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import {sendEmail} from "./main.thunk";

interface IMainState {
    showLoader: boolean,
    showModalMenu: boolean,
    showModalForm: boolean
}

const initialState: IMainState = {
    showLoader: false,
    showModalMenu: false,
    showModalForm: false
}

const mainSlice: Slice<IMainState> = createSlice({
    name: 'main',
    initialState: initialState,
    reducers:{
        setShowModalMenu: (state, action: PayloadAction<boolean>) =>{
            state.showModalMenu = action.payload;
        },
        setShowModalForm: (state, action: PayloadAction<boolean>) =>{
            state.showModalForm = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(sendEmail.pending, (state) =>{
            state.showLoader = true;
        })
            .addCase(sendEmail.fulfilled, (state)=>{
            state.showLoader = false;
        })
            .addCase(sendEmail.rejected, (state)=>{
                state.showLoader = false;
            })
    }
})

export default mainSlice.reducer;
// eslint-disable-next-line no-empty-pattern
export const {setShowModalMenu, setShowModalForm} = mainSlice.actions;