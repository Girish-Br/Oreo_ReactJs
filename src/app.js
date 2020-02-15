import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import AppBarComponent from "../src/components/product/appBar"
import Dashboard from '../src/components/product/dashboard'
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Dashboard} />
                    <Route path="/dashboard" exact={true} component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}
export default App;