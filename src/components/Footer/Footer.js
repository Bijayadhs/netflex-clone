import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
    return (
        <div className="footer container">       
            <div className="social-links">
                <Link className="social-link" to="https://www.facebook.com/Netflix/" target="_blank" aria-label="facebook">
                <FacebookIcon />
                </Link>
                <Link className="social-link" to="https://www.instagram.com/Netflix" target="_blank" aria-label="instagram">
                <InstagramIcon />
                </Link>
                <Link className="social-link" to="https://www.youtube.com/channel/UCNG0bMYut0wL3C9BS5ffQXw" target="_blank" aria-label="youtube">
                <YouTubeIcon />
                </Link>
            </div>
            <ul className="footer__links">
                <a className="footer__link" href="/browse/subtitles">Audio and Subtitles</a>
                <a className="footer__link" href="/browse/audio-description">Audio Description</a>
                <a className="footer__link" href="https://help.netflix.com/">Help Center</a>
                <a className="footer__link" href="/browse/">Gift Cards</a>
                <a className="footer__link" href="/browse/">Media Center</a>
                <a className="footer__link" href="/browse/">Investor Relations</a>
                <a className="footer__link" href="/browse/">Jobs</a>
                <a className="footer__link" href="/browse/">Terms of Use</a>
                <a className="footer__link" href="/browse/">Privacy</a>
                <a className="footer__link" href="/browse/">Legal Notices</a>
                <a className="footer__link" href="/browse/">Cookie Preferences</a>
                <a className="footer__link" href="/browse/">Corporate Information</a>
                <a className="footer__link" href="/browse/">Contact Us</a>   
                </ul>              
                
                 <div className="footer__service">
                    <button>Service Code</button>
                    </div>
                                                                
                <div className="footer__copyright">© 1997-2020 Netflix, Inc.</div>


            </div> 
    )
}
