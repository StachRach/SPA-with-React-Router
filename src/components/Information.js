import React from "react";
import {useParams} from "react-router-dom";

const Information = props => {
  let {id, sth, prod} = useParams();
  let info;

  if (props.main) {
    info = <p>You are on <span>main</span> page </p>
  } else if (props.prod) {
    info = <p>You are on <span>{sth}</span> page, <span>{prod}</span> page</p>
  } else {
    info = <p>You are on <span>{id}</span> page</p>
  }
  return (info);
}

export default Information;