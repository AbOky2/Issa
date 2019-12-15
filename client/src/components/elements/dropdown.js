import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { isFn } from '../../utils/converAndCheck'

const SimpleMenu = ({ menuTitle, childList }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (onClick) => {
        if (isFn(onClick))
            onClick();
        setAnchorEl(null);
    };

    return (
        <div>
            <div onClick={handleClick}>{menuTitle}</div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >
                {childList && childList.map((({ value, onClick }, index) => (
                    <MenuItem key={index} onClick={() => handleClose(onClick)}>{value}</MenuItem>
                )))}
            </Menu>
        </div>
    );
}
export default SimpleMenu