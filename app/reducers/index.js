import { combineReducers } from 'redux';
import mount from './mount';

const rootReducer = combineReducers({
    mount: mount,
});

export default rootReducer;
