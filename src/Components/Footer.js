import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <button tabIndex="0" onClick={props.onClickPrev}>Prev</button>
      <button tabIndex="0" onClick={props.onClickNext}>Next</button>
    </footer>
  );
}

export default Footer;
