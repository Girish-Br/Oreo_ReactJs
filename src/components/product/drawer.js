import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "../../less/styles.less"
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { IconButton, Typography, createMuiTheme, MuiThemeProvider, Icon, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper:
            {
                width: "21%"
            }
        }
    }
})
class DrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div >
                <MuiThemeProvider theme={theme}>
                <Drawer
                    variant="persistent"
                    overflow="auto"
                    open={true}
                >
                        <div className="drawerConteiner">
                            <div className="homeContainer">
                                <HomeIcon style={{ fontSize: 22 }} color="action" />
                                <Typography style={{fontFamily:"serif",fontSize:20}}>Home</Typography>
                            </div>
                            <div className="userContainer">
                                <PersonIcon style={{ fontSize: 22 }} color="action" />
                                <Typography>User</Typography>

                            </div>
                        </div>
                        <div>
                            <Typography className="mainText">--Main</Typography>
                            <div className="drawerComponents">
                                <div className="dashboardAllDrawerContent">
                                    <div className="dashboardDrawerContent">
                                        <Icon color="action"><HomeIcon /></Icon>
                                        <Typography>Dashboard</Typography>
                                    </div>
                                    <div className="drawerArrowContent">
                                        <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></Icon>
                                    </div>
                                </div>
                                <div className="appAllDrawerContainer">
                                    <div className="appDrawerContainer">
                                        <Icon color="action"><AppsIcon /></Icon>
                                        <Typography>App</Typography>
                                    </div>
                                    <div className="drawerArrowContent">
                                        <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></Icon>
                                    </div>
                                </div>
                                <div className="ecommerceAllDrawerContainer">
                                    <div className="ecommerceDrawerContainer">
                                        <Icon color="action"><LocalGroceryStoreIcon /></Icon>
                                        <Typography>E-Commerce</Typography>
                                    </div>
                                    <div className="drawerArrowContent">
                                        <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></Icon>
                                    </div>
                                </div>
                                <div className="uiAllDrawerContainer">
                                    <div className="uiDrawerContainer">
                                        <Icon color="action"><SwapVertIcon /></Icon>
                                        <Typography>User-Interface</Typography>
                                    </div>
                                    <div className="drawerArrowContent">
                                        <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 18 }} /></Icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default withRouter(DrawerComponent)