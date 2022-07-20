import exchangeRateReducer from 'store/news/reducer';
import { AnyAction } from 'redux';

import { ThunkDispatch } from 'redux-thunk';
type ReduxState = ReturnType<typeof exchangeRateReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
