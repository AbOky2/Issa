import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '../../assets/img/icons/close.png'
import './index.css'


export default function SwipeableTemporaryDrawer({ children, open, handleChange }) {

    const toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        handleChange && handleChange('open', open);
    };

    return (
        <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            className='drawer-container'
        >
            <div className='header-container text-right'><img src={CloseIcon} className='pointer' onClick={toggleDrawer(false)} /></div>
            <div className='content-container'>
                {children}
            </div>
        </SwipeableDrawer>
    );
}