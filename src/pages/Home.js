import React from 'react'
import JumbotronContainer from '../containers/jumbotron'
import {FooterContainer} from '../containers/footer'
import {FaqsContainer} from '../containers/faqs'
import {HeaderContainer} from '../containers/header'

function Home(){
    return(
        <>
        <HeaderContainer>
            
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer/>
        </>
    )
}

export default Home