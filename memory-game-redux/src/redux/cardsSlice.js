import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [
      'angular2',
      'vue',
      'react',
      'grunt',
      'phantomjs',
      'ember',
      'babel',
      'ionic',
      'gulp',
      'meteor',
      'yeoman',
      'yarn',
      'nodejs',
      'bower',
      'browserify',
    ],
    duplicatedItems: [],
    finalizedItems: [],
    openedItems: [],
  },
  reducers: {},
});

export default cardsSlice.reducer;
