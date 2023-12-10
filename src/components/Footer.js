import React from 'react'
import imgFooter from '../assets/footer.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from 'react-router-dom';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='content-logo'>
            <img src={imgFooter} alt=''/>
        </div>
        <div className='content-info'>
            <div className='info1'>
                <Link>Company</Link>
                <Link>OUR BRAND</Link>
                <Link>OUR COFFEE</Link>
                <Link>INVESTOR RELATIONS</Link>
                <div className='link'>
                    <InstagramIcon /> <FacebookIcon /> <TwitterIcon />
                </div>
            </div>
            <div className='info2'>
                <Link>More</Link>
                <Link>Contact Us</Link>
            </div>
        </div>
        <div className='termOfUse'>
            <Link>PRIVACY POLICY</Link> |   
            <Link>TERMS OF USE</Link> |
            <Link>COOKIES POLICY</Link>
        </div>
    </div>
  )
}

export default Footer
