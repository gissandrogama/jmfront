import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Ordems from  './pages/Ordems'
import CadOrdem from './pages/CadastroOrdem'

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Ordems}/>
            <Route path="/new" component={CadOrdem}/>
        </Switch>
    )
}

export default Routes