import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "../../less/styles.less"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton,Typography } from '@material-ui/core';
class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="drawerConteiner">
                <div className="homeContainer">
                    <IconButton><HomeIcon color="#000000"/></IconButton>
                    <Typography>Home</Typography>
                </div>
                <div className="userContainer">
                    <IconButton><PersonIcon color="#000000"/></IconButton>
                    <Typography>User</Typography>

                </div>
            </div>
        )
    }
}
export default withRouter(Drawer)