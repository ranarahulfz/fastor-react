import React from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import AppFooter from './components/footer';
import Main from './components/main';

function App() {
  return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Fastor" scroll>
                  <Navigation>
                      <a href="/resume">Resume</a>
                      <a href="/aboutme">About Me</a>
                      <a href="/project">Projects</a>
                      <a href="/contact">Contact</a>
                  </Navigation>
              </Header>
              <Drawer title="Fastor">
                  <Navigation>
                      <a href="/resume">Resume</a>
                      <a href="/aboutme">About Me</a>
                      <a href="/project">Projects</a>
                      <a href="/contact">Contact</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
              <AppFooter />
          </Layout>
      </div>
  );
}

export default App;
