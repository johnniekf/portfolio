import React from 'react'

const Footer = () => {
    return (
        <div class="container-main">
            <div class="container-outer left-border bottom-border">
                <div class="container-inner">
                    <ul class="nav navbar-nav navbar-custom nav-height">
                    <p>Find me on:</p>
                    <li class="nav-item">
                        <a class="nav-link social-link" href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link social-link" href="#about"><i class="fab fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link social-link" href="https://www.twitter.com/johnnie_kf" target="_blank"><i class="fab fa-twitter"></i></a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
