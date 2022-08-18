import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_FAIL,
} from "../Constants/adsContants";


export const adsReducer = (state = {ads:[]}, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {loading:true};
    case SEARCH_REQUEST_SUCCESS:
      return {loading:false , ads : action.payload};
    case SEARCH_REQUEST_FAIL:
      return {loading:false, error :action.payload};
    default:
      return state;
  }
};
