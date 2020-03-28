import React from 'react';

const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">
            Code Blog
        </h4>
        <p className="text-center">Follow us on Social Media</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li><a href="https://www.facebook.com/Anir35" target="_blank" rel="noopener noreferrer" className="facebook">
                    <i className="fa fa-facebook fa-2x" />
                </a>
                </li>
                <li><a href="https://www.twitter.com/I_Am_Anirudh" target="_blank" rel="noopener noreferrer" className="twitter">
                    <i className="fa fa-twitter fa-2x" />
                </a>
                </li>
                <li><a href="https://www.instagram.com/ani03sha" target="_blank" rel="noopener noreferrer" className="instagram">
                    <i className="fa fa-instagram fa-2x" />
                </a>
                </li>
                <li><a href="https://www.google.com/in/anirshar" target="_blank" rel="noopener noreferrer" className="google">
                    <i className="fa fa-google fa-2x" />
                </a>
                </li>
                <li><a href="https://www.linkedin.com/in/anirshar" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <i className="fa fa-linkedin fa-2x" />
                </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer;