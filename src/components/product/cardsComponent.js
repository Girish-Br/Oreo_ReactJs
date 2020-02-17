import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Icon, Typography, AppBar, MuiThemeProvider, createMuiTheme, IconButton, InputBase } from '@material-ui/core'
import "../../less/styles.less"
class CardsInHome extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div >
                    <div>
                        <div>
                            <Typography>
                                Product
                        </Typography>
                            <Typography>
                                Welcome To Oreo
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                Oreo/Commerce/Product
                                </Typography>
                            </div>
                            </div>
                        </div>
                        <div>
                         </div>
                    </div>
                    )
                }
            }
export default withRouter(CardsInHome)