import styled from "styled-components";


const SocialIconContainer = styled.div`
    display: flex;
    height: 10rem;
    align-items: center;
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

    &:hover {
        transform: translateY(-2rem);
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
`

function SocialIcons() {
    return <SocialIconContainer>
        <Image>
            <i className="fa fa-facebook"></i>
        </Image>
        <Image>
            <i className="fa fa-instagram"></i>
        </Image>
        <Image>
            <i className="fa fa-linkedin"></i>
        </Image>
    </SocialIconContainer>
}

export default SocialIcons;