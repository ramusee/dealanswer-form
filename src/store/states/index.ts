import { combineReducers } from 'redux';

import { common } from './common';

export const rootReducer = combineReducers({
  common,
});

export type RootState = ReturnType<typeof rootReducer>;
