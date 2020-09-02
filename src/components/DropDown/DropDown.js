import React from 'react'
import './DropDown.css';

export default function DropDown() {
    return (
        <div className="genres__dropdown">
                <select >
                    <option value="">genres</option>
                    <option value="action">Action</option>
                    <option value="anime">Anime</option>
                    <option value="horror">Horror</option>
                </select>
            </div>
    )
}
