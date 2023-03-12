import React from "react";
import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img4 from "../images/header4.jpeg";

const images = [img1, img2, img3, img4];

const Image = props => <img src={images[props.index]} alt={"city"}/>

export default Image;