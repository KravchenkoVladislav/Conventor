import { Dispatch } from "redux";
import getExchangeRates from "services/getExchangeRates";

import { IStore } from './types';

export const setExchangeRateAction = (list: IStore['list']) => {
    return {
        type: 'exchange/setExchange',
        payload: list,
    }
}

export const loadExchangeRate = () => async (dispatch: Dispatch) => {
    try {
        const response = await getExchangeRates();

        dispatch(setExchangeRateAction(response.data))
    } catch (e) {
        console.log(e, " - произошла ошибка")
    }
}