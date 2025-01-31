import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'devesh kumar singh',
  email: 'devesh@example.com',
  bio: 'Software Developer',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;


