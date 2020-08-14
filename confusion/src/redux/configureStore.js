import { createStore } from 'redux';
import { Reducer, initialState } from './reducer'

//* Called by App.js to start Providing the Redux Store to the components
export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState // our initialState
    );

    return store;
}