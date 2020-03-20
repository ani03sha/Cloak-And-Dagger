import React from 'react';
import './Welcome.css';
import Logo from '../../assets/logo.svg';
import About from '../../components/About/About';

const Welcome = ({ stickyRef }) => {
    return(
        <main>
            <section className="welcome">
                <div ref={stickyRef}>
                    <img src={ Logo } alt="logo" className="welcome--logo" />
                    <p> Even if you scroll, I will stick with you</p>
                    <button className="welcome__cta-primary">Contact Us</button>
                </div>
            </section>
            <About />
        </main>
    );
}

export default Welcome;