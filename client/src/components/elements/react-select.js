import React from 'react'
import Select, { createFilter } from 'react-select';
import { FixedSizeList as List } from "react-window";
import './index.css'

const height = 35;

const MenuList = ({ options, children, maxHeight, getValue }) => {
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;

    return (
        <List
            height={maxHeight}
            itemCount={children.length}
            itemSize={height}
            initialScrollOffset={initialOffset}
        >
            {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
    )
}

export default ({ options = [], value, handleChange }, ...props) => (
    <div className='react-select-container'>
        <Select
            filterOption={createFilter({ ignoreAccents: false })}
            value={value}
            onChange={handleChange}
            options={options}
            components={{ MenuList: (props) => <MenuList {...props} options={options} /> }}
            isMulti
            isSearchable
            {...props}
        />
    </div>
)