import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Cashier } from './Cashier/Cashier'
import { Director } from './Director/Director'
import { Reseption } from './Reseption/Reseption'
import { Sayt } from './Sayt/sayt'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/reseption"  >
                <Reseption />
            </Route>
            <Route path="/director" >
                <Director />
            </Route>
            <Route path="/Cashier" >
                <Cashier />
            </Route>
            <Route path="/" >
                <Sayt />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
