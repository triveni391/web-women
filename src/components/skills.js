import React from "react";
import styled from "styled-components";
import { media } from "../constants/breakpoint";

const SkillsContainer = styled.section`
    width: 90%;
    margin: auto;
`

const SkillsHeader = styled.h1`
    font-size: 3em;
    text-align: center;
    margin: 0.5rem 0;
`
const SkillsContent = styled.div`
    width: 100%;
    display: flex;
    padding: 2rem;
`

const RangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const RangeTitle = styled.h4`
    text-align: left;
`

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 20px;
    background-color: rgba(0,0,0,.05);
`

const ProgressBar = styled.div`
    width: ${props => props.width};
    height: 100%;
    transition: .5s;
    background-image: linear-gradient(315deg, #4d5dfb 0%, #08c8f6 74%);
`

const SkillsBar = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    ${media.mobileOnly} {
        width: 100%;
    }
`


const SkillsDefinition = styled.div`
    width: 50%;
    text-align: center;
    height: 100vh;
    ${media.mobileOnly} {
        display: none;
    }
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
        title: "node js", width: " 80%"
    },
    {
        title: "React js", width: " 80%"
    },
    {
        title: "html/css", width: " 80%"
    },
    {
        title: "mongoDb", width: " 80%"
    }];

    return <SkillsContainer id="skills">
        <SkillsHeader>
            What I Do
        </SkillsHeader>
        <SkillsContent>
            <SkillsDefinition>image</SkillsDefinition>
            <SkillsBar>
                {
                    skillSets.map(skill => <Range title={skill.title} width={skill.width} />)
                }
            </SkillsBar>
        </SkillsContent>
    </SkillsContainer>
}

export default Skills;