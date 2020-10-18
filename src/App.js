import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { IsUserRedirect, ProtectedRout } from './helpers/routes'

import {Home, Signin, Signup, Browse} from './pages'

export function App() {
    const user={}
  return (
    <Router>
        <Switch>
            <Route path={ROUTES.SIGN_IN}>
                <IsUserRedirect
                    user={user} 
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.SIGN_IN}>
                <Signin/>
                </IsUserRedirect>
            </Route>

            <Route path={ROUTES.SIGN_UP}>
                <IsUserRedirect
                    user={user} 
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.SIGN_UP}>
                <Signup/>
                </IsUserRedirect>
            </Route>

            
            <ProtectedRout user={user} path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRout>
            

            <Route exact path={ROUTES.HOME}>
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}
