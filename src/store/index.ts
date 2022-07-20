import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


import exchangeRateReducer from "./news/reducer";

const rootReducer = combineReducers({
    exchangeRateReducer
})

const store = createStore(
    rootReducer, composeWithDevTools( applyMiddleware(thunk))
)

export default store;