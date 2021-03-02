import 'react-awesome-slider/dist/custom-animations/cube-animation.css?raw';
import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import cityImg from '../assets/img/city.png';
import star1 from '../assets/img/star1.png';
import star2 from '../assets/img/star2.png';
import star3 from '../assets/img/star3.png';
import star4 from '../assets/img/star4.png';
import { media } from '../constants/breakpoint'

const Building = styled.div`
      position: fixed;
      background-repeat-y: no-repeat;
      left: 0;
      bottom: 0px;
      background-image: url(${cityImg});
      z-index: 10;
      width: 100%;
      height: 260px;
      ${media.mobileOnly} {
           height: 264px;
      }
`

const move = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(2);
    }
`

const opacity = keyframes`
    0%,20%,40%,60%,80% {
        opacity: 0;
    }

    10%,30%,50%,70%,90% {
        opacity: 1;
    }
`

const Stars = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.star});
    animation:  ${opacity} 8s infinite, ${move} 8s infinite;
    animation-delay: ${props => `${props.delay}s`}
`

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 10;
    pointer-events: none;
    ${media.mobileOnly} {

    }
`

const stars = [
    star1, star2, star3, star4
]


const Night = () => {
    return (
        <Container>
            <Building />
            {stars.map((star, index) => <Stars star={star} delay={(index + 1) * -1} />)}
        </Container>
    )
};

export default Night;