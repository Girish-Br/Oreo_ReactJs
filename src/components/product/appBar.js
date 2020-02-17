import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import EventIcon from '@material-ui/icons/Event';
import MailIcon from '@material-ui/icons/Mail';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import FlagIcon from '@material-ui/icons/Flag';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';
import { Icon, Typography, AppBar, MuiThemeProvider, createMuiTheme, IconButton, InputBase } from '@material-ui/core'
import "../../less/styles.less"
const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root: {
                margin: "12px"
            }
        },
        MuiIconButton: {
            root: {
                color: "#ffff"
            }
        },
        MuiAppBar:{
            root:{
                width:"80%",
                backgroundColor: "#8c99e0"
            },
            colorPrimary: {
                backgroundColor: "#8c99e0"
            }
        }
    }
})
class AppBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <AppBar className="mainNavBar">
                        <div className="appBarContents">
                        <div className="appBarLeftContents">
                            <Typography style={{fontSize:20}}>OREO</Typography>
                            <IconButton><SwapHorizIcon style={{ fontSize: 18 }} /></IconButton>
                            <IconButton >
                                <EventIcon style={{ fontSize: 18 }}/>
                            </IconButton>
                            <IconButton><MailIcon style={{ fontSize: 18 }}/></IconButton>
                            <IconButton><RecentActorsIcon style={{ fontSize: 18 }}/></IconButton>
                            <IconButton><NotificationsIcon style={{ fontSize: 18 }}/></IconButton>
                            <IconButton><FlagIcon style={{ fontSize: 18 }}/></IconButton>
                            <div className="searchBar" style={{borderRadius:25}}>
                            <InputBase placeholder="Search">
                                <SearchIcon style={{ fontSize: 18 }} className="searchIconInInput" />
                            </InputBase>
                            </div>
                            </div>
                            <div className="headerContentRight">
                            <IconButton><PowerSettingsNewIcon style={{ fontSize: 18 }}/></IconButton>
                            <IconButton><SettingsIcon style={{ fontSize: 18 }}/></IconButton>
                        </div>
                        </div>
                    </AppBar>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default withRouter(AppBarComponent)
