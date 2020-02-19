import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import { Icon, Typography, AppBar, MuiThemeProvider, createMuiTheme, IconButton, InputBase, Card } from '@material-ui/core'
import "../../less/styles.less"
 import images from '../../assets/images.json'
 import name from '../../assets/name.json'
// var imagesArray = ["../../../assets/1.png", "../../../assets/2.png", "../../../assets/3.png","../../../assets/4.png","../../../assets/5.png","../../../assets/6.png","../../../assets/7.png","../../../assets/8.png","../../../assets/9.png"]
class CardsInHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageOver:""
        }
    }
    handleMouseOver(){
this.setState({imageOver:25})
    }
    render() {
        console.log("safdsf",images.image)
        let cards = images.image.map(item => {
            return (
                <Card onMouseOver={this.handleMouseOver}
                 className="cardsInProduct" style={{margin:"2%",padding:"2%"}}>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <img style={{zIndex:this.state.imageOver}} src={item} width="90%" height="50%"/>
                    </div>
                </Card>         
        )
        })
        return (
            <div className="productContainer">
                {/* <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div>
                    <p style={{color:"#fffff"}}>Product</p>
                    <p>Welcome To Oreo</p>
                    </div>
                    <div>
                        <p>Oreo</p>
                        </div>
                    <div>
                        <Typography></Typography>
                        </div>
                    </div> */}
                <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                    {cards}
                </div>
            </div>
        )
    }
}
export default withRouter(CardsInHome)