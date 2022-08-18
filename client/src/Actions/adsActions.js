import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_FAIL,
} from "../Constants/adsContants";
import axios from "axios";

export const searchAds = (key) => async (dispatch, getState) => {
  dispatch({ type: SEARCH_REQUEST, payload: key });

  try {
    const { data } = await axios.get(`/api/ads/search/${key}`);
    dispatch({ type: SEARCH_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response &&
      error.response.data &&
      error.response.data.Code &&
      error.response.data.Message;
    dispatch({ type: SEARCH_REQUEST_FAIL, payload: message });
  }
};
