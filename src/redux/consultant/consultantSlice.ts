import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConsultantState {
    name: string;
    expertise: string[];
    loading: boolean;
}

const initialState: ConsultantState = {
    name: '',
    expertise: [],
    loading: false,
};

const consultantSlice = createSlice({
    name: 'consultant',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setExpertise: (state, action: PayloadAction<string[]>) => {
            state.expertise = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setName, setExpertise, setLoading } = consultantSlice.actions;
export default consultantSlice.reducer;
