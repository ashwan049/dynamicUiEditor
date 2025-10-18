import { createSlice } from '@reduxjs/toolkit';
import { initialConfig } from './initialConfig';

const setNestedValue = (state, key, value) => {
  const parts = key.split('.');
  if (parts.length === 2) {
    const [parent, child] = parts;
    if (state[parent] && typeof state[parent] === 'object') {
      state[parent][child] = value;
    }
  } else if (parts.length === 1) {
    state[key] = value;
  }
};

const configSlice = createSlice({
  name: 'config',
  initialState: initialConfig,
  reducers: {
    updateConfig: (state, action) => {
      const { key, value } = action.payload;
      if (key) {
        setNestedValue(state, key, value);
      }
    },

    loadConfig: (state, action) => {
      return action.payload;
    },

    resetConfig: () => initialConfig,
  },
});

export const { updateConfig, loadConfig, resetConfig } = configSlice.actions;
export default configSlice.reducer;
