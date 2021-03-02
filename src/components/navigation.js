import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { media } from "../constants/breakpoint";
import { isMobile } from "../utils";


const NavigationItem = styled.li`
      text-transform: uppercase;
      font-weight: 600;
      color: white;
      cursor: pointer;
      color: ${props => props.active ? "white" : "rgba(255,255,255,0.5)"};
      box-shadow: ${props => props.active ? "0 0 10px #2187e7b3" : ""};
      text-decoration: none;
      padding: 8px;
      
      &:hover {   
          border: ${props => props.isNav ? '2px solid white' : 'none'};
          border-radius: 12px;
          padding: 6px;
       }
      ${media.mobileOnly} {
        color: black;
        width: 70%;
        text-align: center;
        display: ${props => props.isNav ? "list-item" : "none"};
        margin: 2rem;
         &:hover {
          border-radius: 12px;
          padding: 6px;
       }
      }
      `;


const Toggle = styled.div`
      display: none;
      position: fixed;
      right: 2rem;
      top: 2rem;
      height: 2rem;
      width: 3rem;
      ${media.mobileOnly} {
        display: block;
        color: black;
        background: inherit;
        border-bottom: 2px solid ${props => props.isNav ? "black" : "white"};
        border-top: 2px solid ${props => props.isNav ? "black" : "white"};
      }
`


const NavItems = ({ onClick, active, nav, showNav }) => {

    const onSelectNav = (index) => {
        if (isMobile())
            showNav();
        onClick(index);
    }


    return <Fragment>
        <Toggle onClick={() => showNav()} isNav={nav}></Toggle>
        <NavigationItem onClick={() => onSelectNav(0)} active={active === 0} isNav={nav}>
            Home
        </NavigationItem>
        <NavigationItem onClick={() => onSelectNav(1)} active={active === 1} isNav={nav}>
            Services
        </NavigationItem>
        <NavigationItem onClick={() => onSelectNav(2)} active={active === 2} isNav={nav}>
            Skills
        </NavigationItem>
        <NavigationItem onClick={() => onSelectNav(3)} active={active === 3} isNav={nav}>
            Contact
        </NavigationItem>
        <NavigationItem onClick={() => onSelectNav(4)} active={active === 4} isNav={nav}>
            Projects
        </NavigationItem>
    </Fragment >
}

export default NavItems;