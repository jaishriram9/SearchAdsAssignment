import React from "react";
import {useDispatch} from "react-redux";

import "./Searchbox.css";
import { searchAds } from "../Actions/adsActions";

function SearchBox() {
  const dispatch = useDispatch();
  const inputChangeHandler = (e) => {
    const key = e.target.value;

    if (key && key.trim().length) {
      dispatch(searchAds(key));
    }
  };
  return (
    <div className="Searchbox__container">
      <div>
        <input
          type="text"
          onChange={inputChangeHandler}
          placeholder="Start typing..."
        ></input>
      </div>
      <div>
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
}

export default SearchBox;
