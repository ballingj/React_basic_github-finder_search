
import {
  SEARCH_USERS,
  GET_USER_AND_REPOS,
  CLEAR_USERS,
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
    case GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
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