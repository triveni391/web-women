import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
    background: var(--background);
`
function Contact(props) {
    return <ContactContainer id="contact">
        <form>
            <input />
        </form>
    </ContactContainer>
}

export default Contact;