import React, { Fragment } from "react";
import styled from "styled-components";
import { media } from "../constants/breakpoint";


const NavigationItem = styled.li`
      text-transform: uppercase;
      font-weight: 600;
      color: white;
      cursor: pointer;
      a {
          color: white;
          text-decoration: none;
          padding: 8px;

      }
       a:hover {   
      border: 2px solid white;
      border-radius: 12px;
      padding: 6px;
       }
      ${media.mobileOnly} {
        a {
              color: black;
        }
      }
      `;


const NavItems = (props) => {
    return <Fragment>
        <NavigationItem >
            <a href="#home" onClick={() => props.onClick}> Home</a>
        </NavigationItem>
        <NavigationItem>
            <a href="#services" onClick={props.onClick}>Services</a>
        </NavigationItem>
        <NavigationItem>
            <a onClick={props.onClick}>About</a>
        </NavigationItem>
        <NavigationItem>
            <a href="#skills" onClick={props.onClick}>Skills</a>
        </NavigationItem>
        <NavigationItem>
            <a herf="#contact" onClick={props.onClick}>Contact</a>
        </NavigationItem>
    </Fragment >
}

export default NavItems;