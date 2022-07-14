import React, { useLayoutEffect , useRef} from "react";
import styled from "styled-components";
import Draw from "../Draw";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Section = styled.section`

min-height: 100vh;
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};

`
const Title = styled.h2`

font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;
`;

const Container = styled.div`
width: 70%;
height: 200vh;
background-color:${props => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
 align-items: center;
 position: relative;
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

 `

 const Items = styled.ul`
 list-style: none;
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;


 &>*:nth-of-type(2n + 1){
    justify-content: start;

    div{
        border-radius: 50px 0 50px 0;
        text-align: right;
    }
    p{
        border-radius: 40px 0 40px 0;
    }
 }
 &>*:nth-of-type(2n){
    justify-content: end;

    div{
        border-radius: 0 50px 0 50px ;
        text-align: left;
    }
    p{
        border-radius: 0 40px 0 40px ;
    }
 }
 `

 const Item = styled.li`
 width: 100%;
 height: 100%;
 display: flex;
 `

const RoadmapItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};
`
const Box = styled.p`
color: ${props => props.theme.text};
height: fit-content;
background-color: ${props => props.theme.carouselColor };
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`
const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};
`

const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;
`



 const RoadmapItem = ({title, subtext, addToRef}) =>{
    return(
        <Item ref={addToRef}>
            <RoadmapItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </RoadmapItemContainer>
        </Item>
    )
 }
const Roadmap = () =>{
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger);


    const addToRefs = (el)=>{
        if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el)
        }
    }

    useLayoutEffect(() => {
        let t1 = gsap.timeline();
        revealRefs.current.forEach((el, index)=>{
            t1.fromTo(
                el.childNodes[0],
                {
                    y: '0'
                },{
                    y: '-30%',
                    scrollTrigger:{
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: 'top center += 200px',
                        end: 'bottom center',
                        scrub: true,
                        

                    }
                }
            )
        })

        return () => {
            
        };
    },[])
    return(
        <Section>
            <Title>RoadMap</Title>
            <Container>
                <SvgContainer>
                    <Draw/>
                </SvgContainer>
                <Items>
               <Item>&nbsp;</Item>
               <RoadmapItem addToRef={addToRefs} title="Grand Opening 🥳" subtext="Our App would be launched to the Public on 22, July 2022"/>
               <RoadmapItem addToRef={addToRefs} title="Launch Of Token 💰" subtext="We intend to launch our ERC-20 token in the 4th quarter to enable users purchase premium features"/>
               <RoadmapItem addToRef={addToRefs} title="Launch Of Premium Features 🦄" subtext="Exclusive features would be accessible from September 2022"/>
               <RoadmapItem addToRef={addToRefs} title="Launch Of Merch 👕" subtext="We would be releasing cool schwags for our cool users on the 1st of January, 2023"/>
               <RoadmapItem addToRef={addToRefs} title="Opening of the Metaverse 😎" subtext="Premium users would be able to hangout and do cool things  in the Manor metaverse"/>

                </Items>
            </Container>
        </Section>
    )

}

export default Roadmap