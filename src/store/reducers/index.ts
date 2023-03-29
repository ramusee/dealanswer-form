import { combineReducers } from 'redux';

import { common } from './common';
import { spv } from './spv';

export const rootReducer = combineReducers({
  common,
  spv,
});

export type RootState = ReturnType<typeof rootReducer>;
