import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledSidebar } from './styles/Sidebar.styled';
import sidebarMobile from '../assets/images/bg-sidebar-mobile.svg';

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { backgroundColor: '#BEE2FD' };
};

function Sidebar() {
  return (
    <StyledSidebar>
      <img src={sidebarMobile} alt="Sidebar" />
      <nav>
        <NavLink to="/" style={getActiveLinkStyle}>
          <span>1</span>
        </NavLink>
        <NavLink to="/plan" style={getActiveLinkStyle}>
          <span>2</span>
        </NavLink>
        <NavLink to="/add-ons" style={getActiveLinkStyle}>
          <span>3</span>
        </NavLink>
        <NavLink to="/src/views/Step4.jsx" style={getActiveLinkStyle}>
          <span>4</span>
        </NavLink>
      </nav>
    </StyledSidebar>
  );
}

export default Sidebar;
