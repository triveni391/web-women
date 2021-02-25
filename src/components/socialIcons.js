import styled from "styled-components";
import { media } from "../constants/breakpoint";


const SocialIconContainer = styled.div`
    display: flex;
    height: 10rem;
    align-items: center;
    ${media.mobileOnly} {
        flex-direction: column;
        position: absolute;
        top: 40%;
        height: 12rem;
        right: 1rem;
        justify-content: space-around;
    }
`

const Image = styled.div`
    width: 3rem;
    height:3rem;
    border-radius: 3rem;
    margin: 0 1rem;
    background: white;
    padding: 0.2rem;
    font-size: 30px;
    display: flex;
    box-shadow: 0 0 10px #2187e7b3;
    align-items: center;
    justify-content: center;
    transition: 1s;

    &:hover {
        transform: scale(1.5);
        color: white;
    }

    &:nth-child(1):hover {
        background-color: #3b5999;
    }

    &:nth-child(2):hover {
        background-color: #e4405f;
    }

    &:nth-child(3):hover {
        background-color: #0077B5;
    }

    ${media.mobileOnly} {
        &:hover {
        transform: none;
        color: white;
    }
    }
`

function SocialIcons() {
    return <SocialIconContainer>
        <Image onClick={() => window.open('https://www.facebook.com/trivenikgowda')}>
            <i className="fa fa-facebook"></i>
        </Image>
        <Image onClick={() => window.open('https://www.instagram.com/triveni_k_gowda/')}>
            <i className="fa fa-instagram"></i>
        </Image>
        <Image onClick={() => window.open('http://www.linkedin.com/in/triveni-k-772176140')}>
            <i className="fa fa-linkedin"></i>
        </Image>

    </SocialIconContainer>
}

export default SocialIcons;