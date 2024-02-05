import { configureStore } from "@reduxjs/toolkit";
import previewerReducer from "../features/previewer/previewerSlice";

export const store = configureStore({
    reducer: {
        previewer: previewerReducer,
    },
})

export type RootState= ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;