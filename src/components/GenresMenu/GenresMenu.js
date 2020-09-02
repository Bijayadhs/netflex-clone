import React from 'react';
import './GenresMenu.css';
import DropDown from '../DropDown/DropDown';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';

export default function GenresMenu({heading}) {
    return (
        <div className="genres">
            <h1>{heading}</h1>
            <DropDown/>            
            <div className="genres__grid">
                <button><ListIcon/></button>
                <button><AppsIcon/></button>
                </div>
            
        </div>
    )
}
