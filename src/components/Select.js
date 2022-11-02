import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      label,
      name,
      onChange,
      value,
      // defaultOption,
      options,
      datatestid,
    } = this.props;
    return (
      <label htmlFor={ name } className="label">
        { label }
        <div className="select">
          <select
            data-testid={ datatestid }
            name={ name }
            id={ name }
            required
            onChange={ onChange }
            value={ value }
          >
            {/* <option>{ defaultOption }</option> */}
            {
              options.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </div>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ),
  // defaultOption: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
};

Select.defaultProps = {
  options: [],
};

export default Select;
