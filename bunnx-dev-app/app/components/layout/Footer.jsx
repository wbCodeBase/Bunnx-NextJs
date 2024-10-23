import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-info">
                    <p>© 2024 Software Dev Co. All rights reserved.</p>
                    <p>Email: info@softwaredevco.com</p>
                </div>
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-social">
                    {/* <img src="facebook-icon.png" alt="Facebook" />
                    <img src="twitter-icon.png" alt="Twitter" />
                    <img src="linkedin-icon.png" alt="LinkedIn" /> */}
                </div>
            </footer>
        </>
    )
}

export default Footer