import React from 'react'
import {Container, Inner, Title, Header, Body, Item, Frame} from '../accordion/styles/accordion'

export default function Accordion({children, ...restProps}){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}
Accordion.Item = function AccordionTitle({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Body = function AccordionTitle({children, ...restProps}){
    return <Body {...restProps}>{children}</Body>
}

Accordion.Header = function AccordionTitle({children, ...restProps}){
    return <Header {...restProps}>{children}</Header>
}

Accordion.Frame = function AccordionTitle({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}