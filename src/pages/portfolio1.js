import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css?raw";
import { Fragment } from 'react';
import Nav from "../components/navigation";
import styled, { keyframes } from 'styled-components';
import Night from '../components/night';
import Services from '../components/services';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Header from '../components/header';
import Projects from '../components/projects';

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


const CityContainer = styled.div`
    width: 100vw;
    min-height: 110vh;
`

const SliderContainer = styled.div`
    height: 100%;
    width: 100%;
`

const Slider = ({ selected, setSelected }) => {
    function onTransitionRequest(e) {
        setTimeout(() => setSelected(e.nextIndex), 500)
    }
    return (<CityContainer>
        {/* <FirstPageContainer>
            <City />
            {stars.map((star, index) => <Stars star={star} delay={(index) * -1} />)}
        </FirstPageContainer> */}
        <Night />
        <AwesomeSlider bullets={false} fillParent={true} selected={selected} onTransitionRequest={onTransitionRequest}>
            <SliderContainer><Header /></SliderContainer>
            <SliderContainer><Services /></SliderContainer>
            <SliderContainer><Skills /></SliderContainer>
            <SliderContainer><Contact /></SliderContainer>
            <SliderContainer><Projects /></SliderContainer>
        </AwesomeSlider>

    </CityContainer>
    );
}
export default Slider;