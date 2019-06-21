import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://jmc.edu.ph/wp-content/uploads/2018/02/pic.png"
                             alt="avatar"
                             className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>Html/CSS | Javascript | Bootstrap | NodeJS | Angular | React | React-Native | MongoDB</p>
                            <div className="social-links">
                                {/* Linkedin Link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/* GitHub Link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/* Freecode Camp Link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                                </a>
                                {/* Youtube Camp Link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;