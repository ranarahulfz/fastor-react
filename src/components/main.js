import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/aboutme" component={AboutMe}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/project" component={Project}></Route>
        <Route path="/resume" component={Resume}></Route>
    </Switch>
)

export default Main;