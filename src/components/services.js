import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css?raw";
import styled from "styled-components";
import ReactLogo from "../assets/img/react-logo.png";
import Web from "../assets/img/web.png";
import { media } from "../constants/breakpoint";
import "./style.css";


const ServiceContainer = styled.section`
    width: 90%;
    margin: auto;
    position: relative;
    padding-top: 1rem;
`

const ServiceHeader = styled.h1`
    font-size: 3em;
    text-align: center;
    margin: 0.5rem 0;
`

const CardContainer = styled.div`
    position: relative;
    display: flex;
    width: 70%;
    height: 15rem;
    min-height: fit-content;
    display: flex;
    z-index: 10;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transistion: 1s;
    margin: 0 2rem; 
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 0 0 10px #2187e7b3;
    h1, p {
        color: white;
    }
    h1 {
        font-size: 1.2em;
    }

    &:hover {
    transform: skew(2);
    }
    ${media.mobileOnly} {
        width: 100%;
        margin: 0;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        height:fit-content;
    }
`

const CardContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 2rem 0;
    margin: auto;
    ${media.mobileOnly} {
        flex-direction: column;
        
    }
    
`

const HeaderDescription = styled.p`
    text-align: center;
    width: 70%;
    margin: auto;
    ${media.mobileOnly} {
        width: 100%;
    }
`

const Logo = styled.img`
    color: white;
    width: 5rem;
    filter: sepia(1);
`

const Card = (props) => {
    return <CardContainer>
        <Logo src={props.logo} />
        <div>
            <ServiceHeader>{props.header}</ServiceHeader>
            <HeaderDescription>Develop an Excellent User Interface and Integrate the features with backend.</HeaderDescription>
        </div>
    </CardContainer>
}
const Services = () => {
    return <ServiceContainer>
        {/* <HeaderDescription>We develop a static and dynamic websites with Excellent User Interface as per the client requirements.
        Quality test cases using JEST, Mocha and chai ensured for good maintainence
       </HeaderDescription> */}
        <CardContent>
            <Card logo={ReactLogo} header="UI Development" />
            <Card logo={Web} header="Web Development" />
        </CardContent>
    </ServiceContainer>
}

export default Services;