import React from 'react'
import { Header, Profiles} from '../components'
import * as ROUTES from '../constants/routes'

export function SelectProfileContainer({user, setProfile}){

    return(
        <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo 
                to={ROUTES.HOME} 
                src='images/misc/logo.svg'
                alt='Netflix'/>
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Title> Who's Watching? </Profiles.Title>
            <Profiles.List>
                <Profiles.User onclick = {()=> setProfile({
                    displayname: user.displayname,
                    photoURL: user.photoURL
                })} >
                <Profiles.Picture src={user.photoURL} />
                <Profiles.Name> {user.displayname} </Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
        </>
    )
}