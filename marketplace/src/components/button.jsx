import PropTypes from "prop-types";

function Button({ className,onSubmit,onClick,children }) {
  return (
    <button 
    onClick={onClick}
    onSubmit={onSubmit}
    className={`${className} h-12 md:h-13 rounded-md`}>
{children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
