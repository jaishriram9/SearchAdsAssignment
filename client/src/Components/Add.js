import React from "react";
import "./Add.css";

function Add(props) {
  const {add} = props;
  return (
    <div className="add">
      <div className="add__body">
        <h3>{add.headline}</h3>
        <img
          src={add.imageUrl}
          alt="avatar"
        />
        <div className="add__details">
          <h4>
            <b>{add.primaryText}</b>
          </h4>
          <p>{add.description ? add.description : 'Press Button for more Info...'}</p>
        </div>
        <div className="button__container">
          <button type="button">
            <a href={`https://www.${add.CID[0].url}`}>{add.CTA}</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
