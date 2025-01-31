import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'devesh kumar singh',
  email: 'devesh@example.com',
  bio: 'Software Developer',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { name, email, bio } = action.payload;
      state.name = name;
      state.email = email;
      state.bio = bio;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;


