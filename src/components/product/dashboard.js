import React,{Component} from 'react'
import {withRouter} from "react-router-dom"
import AppBarComponent from './appBar'
import DrawerComponent from './drawer'
import CardsInHome from './cardsComponent'
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
                <DrawerComponent/>
                </div>
                    <div style={{width:"80%"}}>
                        <div>
                <AppBarComponent/>
                </div>
                <div>
                    <CardsInHome/>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Dashboard)