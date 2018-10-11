import { createStore } from 'redux';
import appReducer from './reducer';

const contacts = [
  { id: 1, name: 'sarah' },
  { id: 2, name: 'brittany' },
  { id: 3, name: 'billy' },
  { id: 4, name: 'karen' },
  { id: 5, name: 'katie' },
  { id: 6, name: 'matt' },
  { id: 7, name: 'bailey' },
  { id: 8, name: 'quincy' },
  { id: 9, name: 'audrey' },
];

const invites = [];

const initialState = {
  contacts,
  invites,
};

const store = createStore(appReducer, initialState);

export default store;
