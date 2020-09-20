import React from 'react'
import {Container, Item, Inner, Title, Subtitle, Image, Pane} from './styles/jumbotron'

function Jumbotron({children, direction = 'row', ...restProps}){
    return(
        <Item {...restProps}>
            <Inner direction= {direction}> {children} </Inner>
        </Item>
    )
}

export default Jumbotron

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronSubtitle({children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps}){
    return <Image {...restProps}></Image>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}