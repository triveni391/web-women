import styled from "styled-components";

const Button = styled.button`
    padding: 0.5rem 1rem;
    color: white;
    background: inherit;
    font-size: 1em;
    letteer-spacing: 2px;
    width: 10rem;
    outline: none;
    box-shadow: 0 0 10px #2187e7b3;
    &:hover {
        color: black;
        background: rgba(0,0,0,0.5);
        color: white
    }
`
function ButtonComponent({ text, bg, color }) {
    return <Button color={color} bg={bg}>{text}</Button>
}

export default ButtonComponent;