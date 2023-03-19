import React from "react";
import { PropTypes } from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  //   version: "primary",
  version: "secondary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
  version: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Button;
