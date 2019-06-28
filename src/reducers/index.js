import {combineReducers} from 'redux';
import filmsInfoReducer from './filmsInfoReducer';
import filmsBriefInfoReducer from './filmsBriefInfoReducer';
import currentFilmReducer from './currentFilmReducer';
export default combineReducers({
    filmsInfoReducer,
    filmsBriefInfoReducer,
    currentFilmReducer, 
});