import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import { Icon, Typography, AppBar, MuiThemeProvider, createMuiTheme, IconButton, InputBase, Card } from '@material-ui/core'
import "../../less/styles.less"
import images from '../../../assets/images.json'
// var imagesArray = ["../../../assets/1.png", "../../../assets/2.png", "../../../assets/3.png","../../../assets/4.png","../../../assets/5.png","../../../assets/6.png","../../../assets/7.png","../../../assets/8.png","../../../assets/9.png"]
class CardsInHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        console.log("safdsf",images.image)
        let cards = images.image.map(item => {
            console.log(item, "dsgdfggfd")
            return (
                <Card className="cardsInProduct" style={{margin:"2%",padding:"2%"}}>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={{item}} width="100" height="100" />
                    </div>
                    <div>
                        </div>
                </Card>
            )
        })
        return (
            <div className="productContainer">
                <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                    {cards}
                </div>
            </div>
        )
    }
}
export default withRouter(CardsInHome)