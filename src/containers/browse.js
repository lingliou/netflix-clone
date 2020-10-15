import React, {useState} from 'react'
import {Header} from '../components/header'
import * as ROUTES from '../constants/routes'
import {FirebaseContext} from '../context/firebase'
import { SelectProfileContainer } from '../containers/profile'
import { FooterContainer } from './footer'


export function BrowseContainer(){
    const [profile, setProfile] = useState('')

    const user = {
        displayname: "Lily",
        photoURL: "1"
    };

    return(
        profile.displayname ? 
        ( <FooterContainer />) :
        (<SelectProfileContainer user={user} setProfile={setProfile} />)
       
    )

}