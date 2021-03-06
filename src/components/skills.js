import React from "react";
import styled, { keyframes } from "styled-components";
import { media } from "../constants/breakpoint";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
`

const SkillsContainer = styled.section`
    width: 100%;
    margin: auto;
    ${media.mobileOnly} {
    transform: translateY(-13%);
    padding-top: 4rem;
    height: 30rem;
    }
`

const SkillsHeader = styled.h1`
    font-size: 3em;
    text-align: center;
    margin: 0.5rem 0;
`
const SkillsContent = styled.div`
    width: 100vw;
    display: flex;
    padding: 2rem;
    justify-content: center;
`

const RangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    height: 20%;
    flex-flow: wrap;
    width: 100%;
    ${media.smallMobleOnly} {
        margin-bottom:0.5rem;
    }
`
const moveRL = keyframes`
    from {
        overflow: hidden;
    }

    to {
        overflow: visible;
    }
`
const RangeTitle = styled.h5`
    text-align: left;
    color: white;
    margin-bottom: 1rem;
    font-size: 1em;
    text-shadow: 1px 1px #2187e7b3;
    text-transform: uppercase;
    ${media.mobileOnly} {
        font-size: 16px;
    }
`

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 5px;
    background-color: #353b48;
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 0 0 10px #2187e7b3;
`

const ProgressBar = styled.div`
    width: ${props => props.width};
    height: 5px;
    transition: .5s;
    background: #2187e7;
    animation: ${moveRL} 1s;
`

const SkillsBar = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    ${media.mobileOnly} {
        width: 100%;
    }
`

const Content = styled.div`
    display: none;
        font-size: 1em;
        color: black;
        text-align: center;
        vertical-align: middle;
`


function Range(props) {
    return <RangeContainer>
        <RangeTitle>{props.title}({props.width})</RangeTitle>
        <ProgressBarContainer>
            <ProgressBar className="range" style={{ width: props.width }} />
        </ProgressBarContainer>
    </RangeContainer>
}

const Skills = () => {
    const skillSets = [{
        title: "js", width: "80%"
    },
    {
        title: "react js", width: " 80%"
    },
    {
        title: "html/css", width: " 80%"
    },
    {
        title: "nodeJs", width: " 80%"
    },
    {
        title: "mongoDb", width: " 80%"
    }];

    return <SkillsContainer>
        <SkillsContent>
            <SkillsBar>
                {
                    skillSets.map(skill => <Range title={skill.title} width={skill.width} />)
                }
            </SkillsBar>
        </SkillsContent>
    </SkillsContainer>
}

export default Skills;