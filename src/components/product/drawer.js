import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "../../less/styles.less"
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PersonIcon from '@material-ui/icons/Person';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { IconButton, Avatar, Typography, createMuiTheme, MuiThemeProvider, Icon, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { borderRadius } from '@material-ui/system';
import color from '@material-ui/core/colors/amber';
const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper:
            {
                width: "21%"
            }
        },
        MuiIcon: {
            colorAction: {
                color: "#546e7a"
            }
        }
    }
})
class DrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerContent: false,
             profileContent: false
        }
        this.handleDrawerContent = this.handleDrawerContent.bind(this)
         this.handleProfileContent = this.handleProfileContent.bind(this)

    }
    handleProfileContent() {
        console.log("safdasgdfsg")
        this.setState({ profileContent: !this.state.profileContent })
    }
    handleDrawerContent() {
        this.setState({ drawerContent: !this.state.drawerContent })
    }
    render() {
        let drawerContent = !this.state.drawerContent ?
            <div className="slideDrawerContent">
                {/* <Slide className="slideDrawerContent" direction="right" in={true} mountOnEnter unmountOnExit> */}
                    <div>
                        <Typography className="mainText" style={{ color: "#546e7a" }}>--Main</Typography>
                        <div className="drawerComponents">
                            <div className="dashboardAllDrawerContent">
                                <div className="dashboardDrawerContent">
                                    <Icon color="action"><HomeIcon style={{ fontSize: 18 }} /></Icon>
                                    <Typography style={{ color: "#546e7a" }}>Dashboard</Typography>
                                </div>
                                <div className="drawerArrowContent">
                                    <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                </div>
                            </div>
                            <div className="appAllDrawerContainer">
                                <div className="appDrawerContainer">
                                    <Icon color="action"><AppsIcon style={{ fontSize: 18 }} /></Icon>
                                    <Typography style={{ color: "#546e7a" }}>App</Typography>
                                </div>
                                <div className="drawerArrowContent">
                                    <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                </div>
                            </div>
                            <div className="ecommerceAllDrawerContainer">
                                <div className="ecommerceDrawerContainer">
                                    <Icon color="action"><LocalGroceryStoreIcon style={{ fontSize: 18 }} /></Icon>
                                    <Typography style={{ color: "#546e7a" }}>E-Commerce</Typography>
                                </div>
                                <div className="drawerArrowContent">
                                    <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                </div>
                            </div>
                            <div className="uiAllDrawerContainer">
                                <div className="uiDrawerContainer">
                                    <Icon color="action"><SwapVertIcon style={{ fontSize: 18 }} /></Icon>
                                    <Typography style={{ color: "#546e7a" }}>User-Interface</Typography>
                                </div>
                                <div className="drawerArrowContent">
                                    <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Slide> */}
            </div>
            :
            <div className="slideDrawerContent" >
                {/* <Slide className="slideDrawerContent" direction="left" in={true} mountOnEnter unmountOnExit> */}
                    <div className="profileContainerInDrawer">
                        <div className="imageContainerInDrawer">
                            <img src="../../assets/clock.png" style={{
                                boxShadow: "0px 5px 25px 0px rgba(0,0,0,0.2)", width: "45%", border: "3px solid #fff", borderRadius: "50%"
                            }} />
                        </div>
                        <div className="profileTextContainer">
                            <div className="nameContainer">
                                <Typography style={{ marginBottom: "0px", fontFamily: "sans-serif", fontSize: "x-large" }}>Girish</Typography>
                                <Typography >UI UX Developer</Typography>
                            </div>
                        </div>
                        <div className="iconsInProfileDrawer">
                            <IconButton><FacebookIcon color="action" /></IconButton>
                            <IconButton><TwitterIcon color="action" /></IconButton>
                            <IconButton><InstagramIcon color="action" /></IconButton>
                        </div>
                        <div className="addressContainer">
                            <p style={{ color: "#6c757d!important" }}>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                        </div>
                        <div className="followDataContainer">
                            <div className="followContainer">
                                <h3 >1M</h3>
                                <p style={{ color: "#6c757d!important",fontSize:14 }}>Followers</p>
                            </div>
                            <div><h3>1K</h3>
                                <p style={{ color: "#6c757d!important",fontSize:14  }}>Following</p></div>
                            <div>
                                <h3>100
                                </h3>
                                <p style={{ color: "#6c757d!important",fontSize:14  }}>Posts</p></div>
                        </div>
                    </div>
            </div>
        return (
            <div >
                <MuiThemeProvider theme={theme}>
                    <Drawer
                        variant="persistent"
                        overflow="auto"
                        open={true}
                    >
                        <div className="drawerConteiner">
                            <div className="homeContainer" onClick={this.handleDrawerContent}>
                                <HomeIcon style={{ fontSize: 18 }} color="action" />
                                <Typography style={{ fontSize: 15, color: "#888" }}>Oreo</Typography>
                            </div>
                            <div className="userContainer" onClick={this.handleDrawerContent}>
                                <PersonIcon style={{ fontSize: 18 }} color="action" />
                                <Typography style={{ fontSize: 15, color: "#888" }}>User</Typography>
                            </div>
                        </div>
                        {/* {
                            this.state.drawerContent && 
                            <div className="slideDrawerContent">
                                <div>
                                    <Typography className="mainText" style={{ color: "#546e7a" }}>--Main</Typography>
                                    <div className="drawerComponents">
                                        <div className="dashboardAllDrawerContent">
                                            <div className="dashboardDrawerContent">
                                                <Icon color="action"><HomeIcon style={{ fontSize: 18 }} /></Icon>
                                                <Typography style={{ color: "#546e7a" }}>Dashboard</Typography>
                                            </div>
                                            <div className="drawerArrowContent">
                                                <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                            </div>
                                        </div>
                                        <div className="appAllDrawerContainer">
                                            <div className="appDrawerContainer">
                                                <Icon color="action"><AppsIcon style={{ fontSize: 18 }} /></Icon>
                                                <Typography style={{ color: "#546e7a" }}>App</Typography>
                                            </div>
                                            <div className="drawerArrowContent">
                                                <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                            </div>
                                        </div>
                                        <div className="ecommerceAllDrawerContainer">
                                            <div className="ecommerceDrawerContainer">
                                                <Icon color="action"><LocalGroceryStoreIcon style={{ fontSize: 18 }} /></Icon>
                                                <Typography style={{ color: "#546e7a" }}>E-Commerce</Typography>
                                            </div>
                                            <div className="drawerArrowContent">
                                                <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                            </div>
                                        </div>
                                        <div className="uiAllDrawerContainer">
                                            <div className="uiDrawerContainer">
                                                <Icon color="action"><SwapVertIcon style={{ fontSize: 18 }} /></Icon>
                                                <Typography style={{ color: "#546e7a" }}>User-Interface</Typography>
                                            </div>
                                            <div className="drawerArrowContent">
                                                <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        }
                        {
                            this.state.profileContent && 
                            <div className="slideDrawerContent" >
                                <div className="profileContainerInDrawer">
                                    <div className="imageContainerInDrawer">
                                        <img src="../../assets/clock.png" style={{
                                            boxShadow: "0px 5px 25px 0px rgba(0,0,0,0.2)", width: "45%", border: "3px solid #fff", borderRadius: "50%"
                                        }} />
                                    </div>
                                    <div className="profileTextContainer">
                                        <div className="nameContainer">
                                            <Typography style={{ marginBottom: "0px", fontFamily: "sans-serif", fontSize: "x-large" }}>Girish</Typography>
                                                                                        <Typography >UI UX Developer</Typography>
                                        </div>
                                    </div>
                                    <div className="iconsInProfileDrawer">
                                        <IconButton><FacebookIcon color="action" /></IconButton>
                                        <IconButton><TwitterIcon color="action" /></IconButton>
                                        <IconButton><InstagramIcon color="action" /></IconButton>
                                    </div>
                                    <div className="addressContainer">
                                        <p style={{ color: "#6c757d!important" }}>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                    </div>
                                    <div className="followDataContainer">
                                        <div className="followContainer">
                                            <h3 >1M</h3>
                                            <p style={{ color: "#6c757d!important",fontSize:14 }}>Followers</p>
                                        </div>
                                        <div><h3>1K</h3>
                                            <p style={{ color: "#6c757d!important",fontSize:14  }}>Following</p></div>
                                        <div>
                                            <h3>100
                                            </h3>
                                            <p style={{ color: "#6c757d!important",fontSize:14  }}>Posts</p></div>
                                    </div>
                                </div>
                        </div>
                        } */}
                        {drawerContent}
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default withRouter(DrawerComponent)