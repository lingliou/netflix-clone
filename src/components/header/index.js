import React, {useState} from 'react';
import { Background, Container, Logo, ButtonLink, 
    Group, Link, Text, Feature, FeatureCallOut, 
    PlayButton, Search, SearchIcon, SearchInput,
    Profile, Picture, DropDown } from './styles/header'
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

Header.Search = function HeaderSearch ({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false)
    return (
        <Search {...restProps}>
            <SearchIcon onClick={()=> setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput 
                value={searchTerm}
                onChange= {({target})=>setSearchTerm(target.value)}
                placeholder='Search files and series'
                active={searchActive}
                />
        </Search>
    )
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return <Profile {...restProps}> {children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.DropDown = function HeaderDropDown({children, ...restProps}){
    return <DropDown {...restProps}> {children}</DropDown>
}