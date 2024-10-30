// src/components/InputField.jsx
import PropTypes from 'prop-types';

const InputField = ({ type, name, placeholder, value, onChange, error }) => (
  <div className="input-group">
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="input-field"
    />
    {error && <div className="input-error">{error}</div>}
  </div>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

InputField.defaultProps = {
  error: null,
};

export default InputField;
