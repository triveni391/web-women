import styled from "styled-components"

const FeaturedContainer = styled.div`
    padding: 1rem 0;
    height: 10px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    position: absolute;
    transform: translateZ(-41);
    top: 10px;
    font-weight: bold;
    color: #37966F;
    background: #fd5533;
`

function Featured() {
    return <FeaturedContainer>Demo</FeaturedContainer>
}

export default Featured;