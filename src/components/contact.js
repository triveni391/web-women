import React from "react";
import styled from "styled-components";
import { media } from "../constants/breakpoint";
import Button from "./button";
import SocialIcons from "./socialIcons";

const ContactContainer = styled.section`
    width: 80vw;
    height: 80vh;
    margin: 2rem 4rem;
    ${media.mobileOnly} {
        margin: 1rem 0rem;
    }
`

const Header = styled.h2`
    text-align: left;
    color: white;
    text-shadow: 1px 1px #2187e7b3;
    text-transform: uppercase;
`

const P = styled.p`
    color: rgba(255,255,255,0.5);
    line-height: 2;
    width: 40%;
    span {
        color: white;
        font-size: 1em;
    }
    ${media.mobileOnly} {
        width: 100%;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 40%;
    border: none;
    background: inherit;
    -webkit-appearance: none;
    color: white;
    transition: 0.5s;
    outline: none;
    margin-bottom: 2rem;
    border-bottom: 2px solid rgba(0,0,0, 0.5);
    padding: 0.5rem 1rem;
    &:focus {
        -webkit-appearance: none;
        border-bottom: 2px solid white;

    }
`
function Contact(props) {
    return <ContactContainer id="contact">
        <Header>Contact Me</Header>
        <P>If you want to talk to me about project collaboration or just say Hi. Drop your email Id below or send an email to <span>ktriveni391@gmail.com</span></P>
        <Form>
            <Input placeholder="Email" />
            <Button text="submit" />
        </Form>
        <SocialIcons />
    </ContactContainer>
}

export default Contact;