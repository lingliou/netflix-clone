import React from 'react'
import jumboData from '../fixtures/jumbo.json'
import {Jumbotron} from '../components'

function JunbotronContainer(){
    return(
        <Jumbotron.Container>
        {jumboData.map(item => (
            <Jumbotron key={item.id} direction={item.direction}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
                </Jumbotron.Pane>
                
            </Jumbotron>
        ))}
        
        </Jumbotron.Container>
    )
    
}

export default JunbotronContainer
