import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import BreweriesEpic from '@Redux/epics/breweriesEpic';
import { BreweryReducer } from '@Redux/reducers/breweryReducer';

export const rootEpic = combineEpics(
    ...BreweriesEpic,
);

export const rootReducer = combineReducers({
    BreweryReducer,
});
