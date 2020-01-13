import React from 'react';
import propTypes from 'prop-types';

const Footer = (props) => {
  return (
    <footer className="footer">
      <button tabIndex="0" onClick={props.onClickPrev} className="prev">Prev</button>
      <button tabIndex="0" onClick={props.onClickNext} className="next">Next</button>
    </footer>
  );
}

Footer.propTypes = {
  onClickPrev: propTypes.func,
  onClickNext: propTypes.func
};

export default Footer;
