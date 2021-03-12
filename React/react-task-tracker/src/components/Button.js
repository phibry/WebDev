import PropTypes from 'prop-types';

// Instead of props.color, props.text, we can destruct them
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

// Set Default values for the properties
Button.defaultProps = {
  color: 'steelblue',
};

// Set Default types for the properties
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
