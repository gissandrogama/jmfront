import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Ordems from  './pages/Os/Ordems'
import CadOrdem from './pages/Cadastro/CadastroOrdem'
import Visualize from './pages/Visualize'

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Ordems}/>
            <Route path="/new" component={CadOrdem}/>
            <Route path="/visualize/:id" component={Visualize}/>
        </Switch>
    )
}

export default Routes