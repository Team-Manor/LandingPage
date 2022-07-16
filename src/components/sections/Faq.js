import React from 'react'
import styled from 'styled-components';
import Card from '../Card';



const Section = styled.section`

min-height: 100vh;
width: 100vw;
position: relative;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;

flex-direction: column;
color: ${props => props.theme.body};
`
const Title = styled.h2`

font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
width: 80%;
color: ${props => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.carouselColor};
width: fit-content;

@media (max-width: 48em){
    font-size: ${props => props.theme.fontxl};
   }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
    width: 80%;
   }

   @media (max-width: 48em){
    width: 90%;
    flex-direction: column;

    &>*:last-child{
        &>*:first-child{
        margin-top: 0;
        }
    }
   }
`
const Box = styled.div`
width: 45%;

@media (max-width: 64em){
    width: 90%;
    align-self: center;
   }
`
const Faq = () =>{

 

    return(

        <Section id ="Faq">
            <Title>FAQ</Title>
            <Container>
                <Box>
                    <Card title=" How To Create A Channel">
                        Loading. loading.. loadindin... loading....
                    </Card>
                    <Card  title= "Why should I use manor?">
                        Because I said so. lol!
                    </Card>
                    <Card title="When would Premium Features Launch " >
                        oju olohun la n wo.
                    </Card>
                </Box>
                <Box>
                <Card title=" How To Create A Channel">
                    good question
                    </Card>
                    <Card  title= "When is the token launching?">

                    </Card>
                    <Card title="When would Premium Features Launch " >

                    </Card>
                </Box>
            </Container>
        </Section>
    )

}

export default Faq