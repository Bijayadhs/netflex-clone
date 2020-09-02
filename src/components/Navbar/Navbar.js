import React,{useState,useEffect, useRef} from 'react'
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
    const [nav, setNav] = useState(false)
    const navRef = useRef()
    navRef.current = nav
  
    useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 100
        
      if (navRef.current !== show) {
        setNav(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  console.log(nav)


    return (
        <div className="nav" style={{backgroundColor: nav ?'#202020':'transparent'}}>
            <div className="container">
                <div className="navbar">
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
        </div>
    )
}
