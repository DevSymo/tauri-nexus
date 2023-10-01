import { configureStore, createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: { accountResult: null },
  reducers: {
    setAccountResult: (state, action) => {
      state.accountResult = action.payload;
      console.log('Stored accountResult:', state.accountResult);
    },
  },
});

const mmrSlice = createSlice({
  name: 'mmr',
  initialState: { mmrResult: null },
  reducers: {
    setMmrResult: (state, action) => {
      state.mmrResult = action.payload;
      console.log('Stored mmrResult:', state.mmrResult)
    },
  },
});

const matchesSlice = createSlice({
    name: 'matches',
    initialState: { matchesResult: null },
    reducers: {
      setMatchesResult: (state, action) => {
        state.matchesResult = action.payload;
        console.log('Stored matchesResult:', state.matchesResult)
      },
    },
  });

const rootReducer = {
  account: accountSlice.reducer,
  mmr: mmrSlice.reducer,
  matches: matchesSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const { setAccountResult } = accountSlice.actions;
export const { setMmrResult } = mmrSlice.actions;
export const { setMatchesResult } = matchesSlice.actions;
export default store;
