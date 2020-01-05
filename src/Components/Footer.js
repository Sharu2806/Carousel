import React from 'react';

const Footer = (props) => (
  <footer className="footer">
    <button tabIndex="0" onClick={props.onClickPrev} disabled={props.prev}>Prev</button>
    <button tabIndex="0" onClick={props.onClickNext} disabled={props.next}>Next</button>
  </footer>
);

export default Footer;
