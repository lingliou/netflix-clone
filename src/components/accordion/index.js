import React, {useState, useContext, createContext} from 'react'
import {Container, Inner, Title, Header, Body, Item, Frame} from '../accordion/styles/accordion'

const ToggleContext = createContext();

export default function Accordion({children, ...restProps}){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}
Accordion.Item = function AccordionTitle({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){

    return <Title {...restProps}>{children}</Title>
}

Accordion.Body = function AccordionTitle({children, ...restProps}){
    const {toggleShow} = useContext(ToggleContext)
    return toggleShow ? <Body {...restProps}>{children}</Body> : null
}

Accordion.Header = function AccordionTitle({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return(
        <Header onClick={()=>setToggleShow(prev => !prev)}{...restProps}>
            {children}
            {toggleShow ? 
                (<img src='/images/icons/close-slim.png' alt='close' />) :
                (<img src='/images/icons/add.png' alt='open' />)}
        </Header> 
    ) 
}

Accordion.Frame = function AccordionTitle({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}