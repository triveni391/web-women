import React, { Fragment } from "react";
import styled from "styled-components";
import { media } from "../constants/breakpoint";


const HeaderSection = styled.section`
    margin: auto 0;
`
const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  `
const MyDescription = styled.div`
    font-size: 1em;
    color: white;
    font-weight: 600;
    letter-spacing: 1.6;
    & span {
      text-decoration: underline;
    }
  `

const HeaderStyle = styled.h1`
     color: white;
     font-size: 5rem;
     text-transform: uppercase;
     text-shadow: 0 3px 3px rgba(0,0,0,.5);
     ${media.mobileOnly} {
        font-size: 2em;
      }
  `

const SubHeader = styled.span`
     color: white;
     font-size: 1.2em;
     text-shadow: 0 3px 3px rgba(0,0,0,.5);
     position: absolute;
     bottom: 10%;
    ${media.mobileOnly} {
        font-size: 0.8em;
        bottom: 0;
    }

  `

const DescriptionContainer = styled.div`
    padding: 1.5rem 0rem;
    width: 80%;
    line-height: 1.4;
    margin: auto;
    text-align: center;
  `


const Header = () => {
  return <HeaderSection>
    <HeaderContainer>
      <HeaderStyle>Web-Women</HeaderStyle>
      <SubHeader>Freelance Web Developer</SubHeader>
    </HeaderContainer>
    <DescriptionContainer>
      <MyDescription>Hi, I am <span>Triveni</span></MyDescription>
      <MyDescription>I am front-end Developer from Banglore, giving users better UX and High performant websites, In a way to make fortune out of hobby!!</MyDescription>
    </DescriptionContainer>
  </HeaderSection>
}

export default Header;