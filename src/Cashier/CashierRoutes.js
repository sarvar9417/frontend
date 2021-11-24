import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { CreateClient } from './cashierPages/CreateClient'
// import { ClientsPages } from './cashierPages/ClientsPages'
import { AuthPage } from './cashierPages/CashierAuth'
import { CreateCheck } from './cashierPages/CreateCheck'
import { Home } from './cashierPages/Home'
// import { EditClient } from './cashierPages/EditClient'
// import { CreateCost } from './cashierPages/CreateCost'
// import { CostsPages } from './cashierPages/CostsPages'
// import { Reciept } from './cashierPages/CreateCleint/Reciept'
// import { ClientsOnPages } from './cashierPages/ClientsOnPages'
// import { CreateOnlineClient } from './cashierPages/CreateOnlineClient'
// import { ClientHistory } from './cashierPages/CreateCleint/ClientHistory'
// import { ClientAllHistory } from './cashierPages/CreateCleint/ClientAllHistory'

export const CashierRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <div style={{ marginTop: "90px" }} >
                <Switch >
                    <Route path="/cashier" exact >
                        <Home />
                    </Route>
                    <Route path="/cashier/pay/:id" >
                        <CreateCheck />
                    </Route>
                    
                </Switch>
            </div>
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
