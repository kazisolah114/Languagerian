import React from 'react';
import { Link } from 'react-router-dom';
import './FooterSection.css'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
    return (
        <footer className='footer-section'>
            
                <div className="main-footer">
                <div className="main-footer-container container-head-foot">
                <div className="main-footer-content">
                    <div className="footer-company-item footer-item">
                        <Link to="/"><img src="https://i.ibb.co/NFB6QkH/logo.png" alt="" /></Link>
                        <p>Languagerian offers the freedom and flexibility to learn with a teacher you like, at a price you can afford. You aren't locked into any hard commitments. Browse a marketplace of teachers with different teaching styles that's right for you.</p>
                        <select name="" id="">
                            <option value="">English</option>
                            <option value="">Spanish</option>
                            <option value="">German</option>
                            <option value="">Italian</option>
                        </select>
                    </div>
                    <div className="footer-courses-item footer-item">
                        <h3>Courses</h3>
                        <ul>
                            <li><Link to="">Learn English</Link></li>
                            <li><Link to="">Learn Korean</Link></li>
                            <li><Link to="">Learn Arabic</Link></li>
                            <li><Link to="">Learn Spanish</Link></li>
                            <li><Link to="">Learn Italian</Link></li>
                            <li><Link to="">Learn German</Link></li>
                            <li><Link to="">Learn Japanese</Link></li>
                        </ul>
                    </div>
                    <div className="footer-teachers-item footer-item">
                        <h3>For Teachers</h3>
                        <ul>
                            <li><Link to="">Code and Conduct</Link></li>
                            <li><Link to="">Become a teacher</Link></li>
                            <li><Link to="">Teaching Tips</Link></li>

                        </ul>
                    </div>
                    <div className="footer-resources-item footer-item">
                        <h3>Resources</h3>
                        <ul>
                            <li><Link to="">Take Quiz</Link></li>
                            <li><Link to="">Language Test</Link></li>
                            <li><Link to="">Communities</Link></li>

                        </ul>
                    </div>
                    <div className="footer-more-item footer-item">
                        <h3>More</h3>
                        <ul>
                            <li><Link to="">FAQ</Link></li>
                            <li><Link to="">Blogs</Link></li>
                            <li><Link to="">Contact Us</Link></li>

                        </ul>
                    </div>
                </div>
                </div>
                </div>
                <div className="bottom-footer-content container-head-foot">
                    <div className="copyright-links">
                        <p>&copy; 2023 languagerian rights</p>
                        <Link to=""><p>About us</p></Link>
                        <Link to=""><p>Legal</p></Link>
                        <Link to=""><p>Contact</p></Link>
                        <Link to=""><p>Privacy</p></Link>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li><Link to=""><FaFacebookF/></Link></li>
                            <li><Link to=""><FaTwitter/></Link></li>
                            <li><Link to=""><FaYoutube/></Link></li>
                            <li><Link to=""><FaLinkedinIn/></Link></li>
                        </ul>
                    </div>
                </div>
            
        </footer>
    );
};

export default FooterSection;