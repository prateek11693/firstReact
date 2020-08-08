import React from "react";

const Footer = (props) => {
  return (
    <>
      <hr />
      <center>
        <h3>
          &copy; Prateek Gupta {props.month} {props.year}
        </h3>
      </center>
    </>
  );
};

export default Footer;
