import React,{Component} from 'react'
import {withRouter} from "react-router-dom"
import AppBarComponent from './appBar'
import Drawer from './drawer'
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{width:"20%"}}>
                <Drawer/>
                </div>
                    <div style={{width:"80%"}}>
                <AppBarComponent/>
                </div>
            </div>
        )
    }
}
export default withRouter(Dashboard)