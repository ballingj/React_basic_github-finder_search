
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types';

/* By default, all types of anonymous default exports are forbidden, but any types can be selectively allowed by toggling them on in the options.   eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": false}] 
or by using the coment below: */
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}