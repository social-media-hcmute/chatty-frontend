import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ name, type, value, className, labelText, placeholder, handleChange ,style}) => {
  return (
    <>
      <div className="form-row">
        {labelText && (
          <label htmlFor={name} className="form-label">
            {labelText}
          </label>
        )}
        <input
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`form-input ${className}`}
          style={style}
          autoComplete="false"
        />
      </div>
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  className: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  style:PropTypes.any,
};

export default Input;
