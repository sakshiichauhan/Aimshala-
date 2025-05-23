import { configureStore } from '@reduxjs/toolkit';
import consultantReducer from "@/redux/consultant/consultantSlice"

export const store = configureStore({
    reducer: {
        consultant: consultantReducer
    },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
