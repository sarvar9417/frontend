import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { CreateClient } from './cashierPages/CreateClient'
import { AuthPage } from './cashierPages/CashierAuth'
import { Home } from './cashierPages/Home'
import { EditClient } from './cashierPages/EditClient'
import { CreateCost } from './cashierPages/CreateCost'
import { CostsPages } from './cashierPages/CostsPages'
import { Reciept } from './cashierPages/CreateCleint/Reciept'
import { ClientsOnlinePages } from './cashierPages/ClientsOnlinePages'
import { CreateOnlineClient } from './cashierPages/CreateOnlineClient'
import { ClientAllHistory } from './cashierPages/CreateCleint/ClientAllHistory'
import { Payment } from './cashierPages/Payment'

export const CashierRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/cashier" exact >
                    <Home />
                </Route>
                <Route path="/cashier/qabul"  >
                    <CreateClient />
                </Route>
                <Route path="/cashier/onlineqabul"  >
                    <CreateOnlineClient />
                </Route>
                <Route path="/cashier/clients" >
                    <Home />
                </Route>
                <Route path="/cashier/onlineclients" >
                    <ClientsOnlinePages />
                </Route>
                <Route path="/cashier/reciept/:id" >
                    <Reciept />
                </Route>
                <Route path="/cashier/edit/:id" >
                    <EditClient />
                </Route>z
                <Route path="/cashier/cost" >
                    <CreateCost />
                </Route>
                <Route path="/cashier/costs" >
                    <CostsPages />
                </Route>
                <Route path="/cashier/payment/:id" >
                    <Payment />
                </Route>
                <Route path="/cashier/clientallhistory/:id" >
                    <ClientAllHistory />
                </Route>
                <Redirect to="/cashier" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/cashier" >
                <AuthPage />
            </Route>
            <Redirect to="/cashier" />
        </Switch>
    )
}
