import React from "react";
import styled from "styled-components";
import ReactLogo from "../assets/img/react-logo.png";
import Web from "../assets/img/web.png";


const ServiceContainer = styled.section`
    width: 90%;
    margin: auto;
`

const ServiceHeader = styled.h1`
    font-size: 3em;
    text-align: center;
    margin: 0.5rem 0;
`

const CardContainer = styled.div`
    position: relative;
    width: 25rem;
    height: 20rem;
    display: flex;
    z-index: 10;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 4px -2px -4px black;
    transistion: 1s;
    h1, p {
        color: black;
    }
    h1 {
        font-size: 1.2em;
    }

    &:hover {
    transform: skew(2);
    }
`
const BoxShadow = styled.div`
    width: 100%;
    height: 10%;
    position: absolute;
    top: 0;
    z-index: 1;
    background-image: linear-gradient(315deg, #4d5dfb 0%, #08c8f6 74%);
`
const CardContent = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem 0;
`

const HeaderDescription = styled.p`
    text-align: center;
    width: 50%;
    margin: auto;
`

const Logo = styled.img`
    color: white;
    width: 5rem;
    filter: sepia(1);
`

const Card = (props) => {
    return <CardContainer>
        <BoxShadow />
        <Logo src={props.logo} />
        <div>
            <ServiceHeader>{props.header}</ServiceHeader>
            <HeaderDescription>Develop an Excellent User Interface and Integrate the features with backend.</HeaderDescription>
        </div>
    </CardContainer>
}
const Services = () => {
    return <ServiceContainer id="services">
        <ServiceHeader>
            What I Do
        </ServiceHeader>
        <HeaderDescription>We develop a static and dynamic websites with Excellent User Interface as per the client requirements.
             Quality test cases using JEST, Mocha and chai ensured for good maintainence</HeaderDescription>

        <CardContent>
            <Card logo={ReactLogo} header="UI Development" />
            <Card logo={Web} header="Web Development" />
        </CardContent>
    </ServiceContainer>
}

export default Services;