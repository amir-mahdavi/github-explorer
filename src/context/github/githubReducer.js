import { SEARCH_USERS, CLEAR_USERS, SET_LOADING, GET_USER, GET_REPOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};