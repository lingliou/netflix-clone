import React, {useState} from 'react'
import {Header} from '../components/header'
import * as ROUTES from '../constants/routes'
import {FirebaseContext} from '../context/firebase'
import { SelectProfileContainer } from '../containers/profile'
import { FooterContainer } from './footer'


export function BrowseContainer(){
    const [profile, setProfile] = useState('')


    return(
        profile.displayname ? 
        ( <FooterContainer />) :
        (<SelectProfileContainer/>)
       
    )

}