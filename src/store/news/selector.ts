import { IStore } from './types';

export const selectList = (state: {exchangeRateReducer: IStore} ): IStore['list'] => state.exchangeRateReducer.list