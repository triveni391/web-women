import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../constants/breakpoint";
import Button from "./button";
import SocialIcons from "./socialIcons";
import axios from "axios";
import { validate } from 'email-validator';

const ContactContainer = styled.section`
    width: 80vw;
    height: 80vh;
    margin: auto;
    padding-top: 2rem;
    ${media.mobileOnly} {
        margin: 1rem 0rem;
        padding-top: 1rem;
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
    line-height: 1.5;
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
    margin-bottom: 1rem;
    border-bottom: 2px solid rgba(0,0,0, 0.5);
    padding: 0.5rem 1rem;
    &:focus {
        -webkit-appearance: none;
        border-bottom: 2px solid white;
    }

    ${media.mobileOnly} {
        width: 70%
    }
`

const TextArea = styled.textarea`
  width: 40%;
    border: none;
    background: inherit;
    -webkit-appearance: none;
    color: white;
    transition: 0.5s;
    outline: none;
    margin-bottom: 1rem;
    border-bottom: 2px solid rgba(0,0,0, 0.5);
    padding: 0.5rem 1rem;
    &:focus {
        -webkit-appearance: none;
        border-bottom: 2px solid white;
    }

    ${media.mobileOnly} {
        width: 70%
    }
`;

const ErrorText = styled.p`
    color: red;
`
function Contact() {
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');
    const [error, set_error_message] = useState('');
    const [popup, set_popup] = useState('');
    const [info, set_info] = useState('');

    function isValid() {
        return validate(email) && details.length;
    }
    function sendMessage(e) {
        e.preventDefault();
        try {
            if (isValid()) {
                const data = {
                    email: `${email}`,
                    subject: "new client",
                    content: details
                };
                axios.post("https://my-protofolio-server.herokuapp.com/mailer/sendEmail", data, {
                    headers: {
                        contentType: "application/json"
                    }
                })
                    .then(response => {
                        console.log(response);
                        set_error_message("");
                        set_popup(true);
                        set_info('Our team will contact you. Please be ')
                    }).catch(ex => {
                        set_popup(true);
                        set_error_message("Something Went wrong")
                        console.error("error in sending mail", ex)
                    });
            } else {
                set_error_message("invalid input")
            }
        } catch (ex) {
            console.error(`error in sending mail`, ex);
            throw ex;
        }
    }

    return <ContactContainer id="contact">
        {/* <Header>Contact Me</Header> */}
        <P>If you want to talk to me about project collaboration or just say Hi. Drop your email Id below or send an email to <span>ktriveni391@gmail.com</span></P>
        {
            error && <ErrorText>{error}</ErrorText>
        }
        {
            !error && info && <P>Your message is successfully sent. Our team will get in touch with you.</P>
        }
        <Form>
            <Input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <TextArea placeholder="Description" onChange={e => setDetails(e.target.value)} />
            <Button text="submit" onClick={sendMessage} />
        </Form>
        <SocialIcons />

    </ContactContainer>
}

export default Contact;