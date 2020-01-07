import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <button tabIndex="0" onClick={props.onClickPrev} className="prev">Prev</button>
      <button tabIndex="0" onClick={props.onClickNext} className="next">Next</button>
    </footer>
  );
}

export default Footer;
