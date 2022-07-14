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
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-content: center;

`
const Box = styled.div`
width: 45%;
`
const Faq = () =>{

 

    return(

        <Section >
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis nulla vel tincidunt volutpat. Vivamus porttitor sem ac venenatis hendrerit. Quisque efficitur nisl tellus, et tempor elit fringilla sit amet. Aenean tristique nec mi eu placerat. Sed fermentum pharetra pellentesque. Praesent a ante eros. Aenean semper, tortor ut pretium dapibus, eros quam accumsan tortor, non dictum lacus lectus sed justo. Phasellus luctus magna vel purus feugiat, rhoncus pretium sapien blandit. Aliquam feugiat odio eget leo suscipit consectetur. Morbi interdum hendrerit erat sit amet tempus.
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