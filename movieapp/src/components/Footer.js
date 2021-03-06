import React from 'react';
import mdbImage from '../img/attribution.svg';
import mdbFallback from '../img/attribution-fallback.png'

const Footer = () => {
    return (
    <footer className="main-footer">
        <section className="main-footer-top">
            <header className="main-footer-top-header">
                <h2>Z M D B</h2>
            </header>
            <div className="main-footer-top-item">
                <h3>portfolio:</h3>
                <p><a href="https://zachlynch123.github.io/">https://zachlynch123.github.io/</a></p>
            </div>
            <div className="main-footer-top-item">
                <h3>Email:</h3>
                <p>zachary.lynch1337@gmail.com</p>
            </div>
            <div className="main-footer-top-rights">
                <p>Coded and designed by <a href="https://zachlynch123.github.io/">Zach Lynch</a></p>
            </div>
        </section>
        <section className="main-footer-bottom">
            <img src={mdbImage} alt={mdbFallback} className="main-footer-bottom-img"></img>
        </section>
    </footer>
    );
}

export default Footer;