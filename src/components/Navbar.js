import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    display = flex;
    align-items = center;
`;

const Brand = styled.span`
    font-family = Bloomfield;
    font-weight = 500;
    font-size = 2em;
`;

const Navbar = () => (
    <div className="navbar-container">
        <Nav>
            <Brand>
                Fastor
            </Brand>
        </Nav>
    </div>
)

export default Navbar;