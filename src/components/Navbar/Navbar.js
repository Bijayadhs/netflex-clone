import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
// import VolumeUpIcon from '@material-ui/icons/VolumeUp';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Navbar() {
    return (
        <div className="container">
            <div className="nav">
            <Link to='/browse'><img className="nav__logo" src={"/img/logo.svg"} alt="NETFLEX"/></Link> 
            <ul className="nav__browse">
                <li><Link to='/browse'>Home</Link></li>
                <li><Link to='/browse/genres/2251'>TV Shows</Link></li>
                <li><Link to='/browse/genres/7684'>Movies</Link></li>
                <li><Link to='/browse/latest'>Latest</Link></li>
                <li><Link to='/browse/my-list'>My List</Link></li>
            </ul>
            <ul className="nav__menu">
                <li><SearchIcon/></li>
                <li><CardGiftcardIcon/></li>
                <li><NotificationsIcon/></li>
                <li><img src={"/img/1.png"} width="40px" alt="bj"/></li>
                <li><KeyboardArrowDownIcon/></li>
                


            </ul>
            </div>
        </div>
    )
}
