import React from "react";

const Social = () => {
    return (
        <div className="home__social">
        <a href="https://www.linkedin.com/in/gokulsarveshsk/"
         className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/gokulsarveshsk" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://twitter.com/gokulsarvesh" className="home__social-icon" target="_blank">
        <i class="uil uil-twitter-alt"></i>
        </a>
        <a href="https://www.instagram.com/sarvesh__s_k/" className="home__social-icon" target="_blank">
            <i class="uil uil-instagram"></i>
        </a>
        </div>
    );
};

export default Social;