import css from './ContactForm.module.css'
import React from "react";
import PropTypes from 'prop-types';

const Filter =({value, onChange})=> (
            <label className={css.contactLabel}>Find contact by name
                <input
                    value={value}
                    onChange={onChange}
                    name="filter"
                    className={css.inputField} type="text" />
            </label>      
        );

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
