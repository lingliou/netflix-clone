import React from 'react';
import { Background, Container, Logo, ButtonLink, Group, Link, Text, Feature, FeatureCallOut, PlayButton } from './styles/header'
import { Link as ReachRouterLink } from 'react-router-dom';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Group =  function HeaderGroup({children, ...restProps}){
    return <Group {...restProps}> {children} </Group>
}
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Link = function HeaderLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.Feature = function HeaderFeature ({children, ...restProps}){
    return <Feature {...restProps}> {children} </Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallout ({children, ...restProps}){
    return <FeatureCallOut {...restProps}> {children} </FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton ({children, ...restProps}){
    return <PlayButton {...restProps}> {children} </PlayButton>
}