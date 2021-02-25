import styled from "styled-components";
import { media } from "../constants/breakpoint";
import basil from "../assets/img/projects/basil.png";
import ButtonComponent from "./button";
import Featured from "./featured";

const HeaderStyle = styled.h1`
     color: white;
     font-size: 1rem;
     text-transform: uppercase;
     text-shadow: 0 3px 3px rgba(0,0,0,.5);
     ${media.mobileOnly} {
        font-size: 2em;
      }
  `

const Image = styled.img`
      width: 100%;
      height: 30rem;
      ${media.mobileOnly} {
          height: 50vh;
      }
`
const Container = styled.div`
      width: 85%;
      margin: auto;
`

const ListItem = styled.li`
      font-size: 1em;
      margin: 1rem
`

const ListContainer = styled.ul`
      display: flex;
      flex-wrap: wrap;
`;

const Content = styled.div`
      display: grid;
      grid-template-columns: 36% 59%;
      grid-gap: 3rem;
      color: rgba(255,255,255,0.5);
      z-index: 11;
      ${media.mobileOnly} {
       overflow-y: scroll;   
       padding: 6rem 2rem;   
       grid-template-columns: 100%;
      }
`;

const ProjectHeader = styled(HeaderStyle)`
      font-size: 3em;
      ${media.mobileOnly} {
          padding: 0;
      }
`

const TechnologyContainer = styled.div`
    width: 100%;
      p {
          padding: 1rem 0;
      }
`;

const ImageContainer = styled.div`
      position: relative;
`

function Projects() {
    return <Container>
        <ProjectHeader>Basil</ProjectHeader>
        <Content>
            <ImageContainer>
                <Featured />
                <Image src={basil} />
            </ImageContainer>
            <TechnologyContainer>
                <HeaderStyle>Description</HeaderStyle>
                <p>Basil is a resturant website which renders the list of resturants and menu list of the selected resturant.</p>
                <p>Two api's, which renders the list of restuarants and a selected resturant is used throughout the application. react-redux is used to store the api results, styled-css for inline styling.
                    Well wriiten swagger documentation is available for the api's used. </p>
                <HeaderStyle>Technologies</HeaderStyle>
                <ListContainer>
                    <ListItem><ButtonComponent text="javascript" /></ListItem>
                    <ListItem><ButtonComponent text="HTML5/CSS" /></ListItem>
                    <ListItem><ButtonComponent text="ReactJs" /></ListItem>
                    <ListItem><ButtonComponent text="NodeJs" /></ListItem>
                    <ListItem><ButtonComponent text="ExpressJS" /></ListItem>
                </ListContainer>
                <HeaderStyle>Libraries</HeaderStyle>
                <ListContainer>
                    <ListItem><ButtonComponent text="Swagger" /></ListItem>
                    <ListItem><ButtonComponent text="Styled-components" /></ListItem>
                    <ListItem><ButtonComponent text="React-redux" /></ListItem>
                    <ListItem><ButtonComponent text="React-router" /></ListItem>
                    <ListItem><ButtonComponent text="nodemon" /></ListItem>
                </ListContainer>
            </TechnologyContainer>

        </Content>
    </Container>
}

export default Projects;