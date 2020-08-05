import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// You only have to do this once
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) // This will warn us if we accidentally mutate Redux State
  );
}
