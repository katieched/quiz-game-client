import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { gameReducer } from './reducer/gameReducer';

export const store = createStore(gameReducer, devToolsEnhancer());