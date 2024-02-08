import { createSlice } from "@reduxjs/toolkit";
export interface PreviewerState {
    text: string;
}

const initialState: PreviewerState = {
    text: 'Vida',
}

export const previewerSlice = createSlice({
    name: 'previewer',
    initialState,
    reducers: {
        preview: (state) =>{
            state.text = (document.getElementById('textArea') as HTMLInputElement).value;
        }
    }
})

export const { preview } = previewerSlice.actions;

export default previewerSlice.reducer;