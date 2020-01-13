import React from 'react'
import Select from 'react-select';
import './index.css'


export default ({ options = [], value, handleChange }) => (
    <div className='react-select-container'>
        <Select
            value={value}
            onChange={handleChange}
            options={options}
            isMulti
            isSearchable
        />
    </div>
);