import styled, { keyframes, ThemeProvider } from "styled-components";
import React, { Fragment, useState } from "react";
import { media } from "./constants/breakpoint";
import NavItems from "./components/navigation";
import Header from "./components/header";
import Skills from "./components/skills";
import Services from "./components/services";
import Contact from "./components/contact";

const translate = keyframes`
    from {
      height: 0;
    }

    to {
      height: 90vh;
    }
  `

const Wave = styled.div`
  {
    height: 90vh;
    width: 100vw;
    position: absolute;
    background: white;
    transistion: 2s;
    text-align: center;
    z-index: 9;
    clip-path: polygon(100% 0,0 0,0 77.5%,1% 77.4%,2% 77.1%,3% 76.6%,4% 75.9%,5% 75.05%,6% 74.05%,7% 72.95%,8% 71.75%,9% 70.55%,10% 69.3%,11% 68.05%,12% 66.9%,13% 65.8%,14% 64.8%,15% 64%,16% 63.35%,17% 62.85%,18% 62.6%,19% 62.5%,20% 62.65%,21% 63%,22% 63.5%,23% 64.2%,24% 65.1%,25% 66.1%,26% 67.2%,27% 68.4%,28% 69.65%,29% 70.9%,30% 72.15%,31% 73.3%,32% 74.35%,33% 75.3%,34% 76.1%,35% 76.75%,36% 77.2%,37% 77.45%,38% 77.5%,39% 77.3%,40% 76.95%,41% 76.4%,42% 75.65%,43% 74.75%,44% 73.75%,45% 72.6%,46% 71.4%,47% 70.15%,48% 68.9%,49% 67.7%,50% 66.55%,51% 65.5%,52% 64.55%,53% 63.75%,54% 63.15%,55% 62.75%,56% 62.55%,57% 62.5%,58% 62.7%,59% 63.1%,60% 63.7%,61% 64.45%,62% 65.4%,63% 66.45%,64% 67.6%,65% 68.8%,66% 70.05%,67% 71.3%,68% 72.5%,69% 73.6%,70% 74.65%,71% 75.55%,72% 76.35%,73% 76.9%,74% 77.3%,75% 77.5%,76% 77.45%,77% 77.25%,78% 76.8%,79% 76.2%,80% 75.4%,81% 74.45%,82% 73.4%,83% 72.25%,84% 71.05%,85% 69.8%,86% 68.55%,87% 67.35%,88% 66.2%,89% 65.2%,90% 64.3%,91% 63.55%,92% 63%,93% 62.65%,94% 62.5%,95% 62.55%,96% 62.8%,97% 63.3%,98% 63.9%,99% 64.75%,100% 65.7%);
    animation: ${translate} 4s linear alternate;
  background-color: #4d5dfb;
background-image: linear-gradient(315deg, #4d5dfb 0%, #08c8f6 74%);
    ${media.smallMobleOnly} {
      padding: 2rem 0.1px;
    }
  }
  `

const Toggle = styled.div`
    display: none;
    height: 20px;
    width: 2rem;
    margin: 1rem;
    border-top: 2px solid ${props => props.background};
    border-bottom: 2px solid ${props => props.background};
    transistion: 1s;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    before {
      height: 50%;
      border-top: 2px solid ${props => props.background};
    }
    ${media.mobileOnly}{
    display: block;  
  }
`

const MobileNavContainer = styled.ul`
    width: 100%;
    height: 100vh;
    display: flex;
    list-style: none;
    background: white;
    transition:
    margin: 0;
    padding: 0;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    & li {
      color: black;
      padding: 1rem 0;
      font-size: 1.5em;
    }
`
const Wrapper = styled.section`
      position: relative;
      width: 100%;
      z-index: 11;
  `
const NavigationWrapper = styled.section`
      width: 100%;
      position: fixed;
      background-image: linear-gradient(315deg, #4d5dfb 0%, #08c8f6 74%);
      top: 0;
      background-image: ;
      height: 5rem;
  `

const NavigationContainer = styled.ul`
      display: flex;
      list-style: none;
      width: 100%;
      height: 2rem;
      padding: 1rem 0;
      justify-content: space-around;
      ${media.mobileOnly} {
        display: none;
      }
  `

function App() {
  const [showNav, setShowNav] = useState(false);

  function toggleNav(params) {
    setShowNav(!showNav);
  }
  return (
    showNav ? <>
      <Toggle onClick={toggleNav} background="black" />
      <MobileNavContainer>
        <NavItems onClick={toggleNav} />
      </MobileNavContainer>
    </> :
      <Fragment>
        <Wave />
        <Wrapper>
          <Toggle onClick={toggleNav} background="white" />
          <NavigationWrapper >
            <NavigationContainer>
              <NavItems />
            </NavigationContainer>
          </NavigationWrapper>
          <Header />
          <Services />
          <Skills />
          <Contact />
        </Wrapper>
      </Fragment>
  );

}

export default App;
