import React from 'react'
import "../static/App.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}));

function Header() {
    const classes = useStyles();
    return (
        <>
            <div>
                <Grid container spacing={3} boxShadow={0} style={{boxShadow:'none'}}>
                    <Grid item xs={12} m={1} p={1} boxShadow={0} bgcolor="background.paper">
                        <Paper className={classes.paper} >
                            <div className="top-logo"><img src="media/icon-1.png" /></div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container item xs={12} boxShadow={0}>
                    <Grid item xs={4} justify="center">
                        <Paper className={classes.paper}>
                            <div className="each-box">
                                <div className="each-box-text box-between">
                                    <h3>Upload Prescription</h3>
                                </div>
                                <div className="each-box-icon box-between box-right-image">
                                    <img src="media/icon-2.png" />
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} justify="center" boxShadow={0}>
                        <Paper className={classes.paper}>
                            <div className="each-box">
                                <div className="each-box-text box-between">
                                    <h3>Emergency Medicine</h3>
                                </div>
                                <div className="each-box-icon box-between box-right-image">
                                    <img src="media/icon-3.png" />
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} justify="center" boxShadow={0}>
                        <Paper className={classes.paper}>
                            <div className="each-box">
                                <div className="each-box-text box-between">
                                    <h3>Body-Care Product</h3>
                                </div>
                                <div className="each-box-icon box-between box-right-image">
                                    <img src="media/icon-4.png" />
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} boxShadow={0}>
                    <Grid item xs={2} justify="center" boxShadow={0}>
                            
                    </Grid>
                    <Grid item xs={4} justify="center">
                        <Paper className={classes.paper}>
                            <div className="each-box">
                                <div className="each-box-text box-between">
                                    <h3>Upload Prescription</h3>
                                </div>
                                <div className="each-box-icon box-between box-right-image">
                                    <img src="media/icon-2.png" />
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} justify="center" boxShadow={0}>
                        <Paper className={classes.paper}>
                            <div className="each-box">
                                <div className="each-box-text box-between">
                                    <h3>Emergency Medicine</h3>
                                </div>
                                <div className="each-box-icon box-between box-right-image">
                                    <img src="media/icon-3.png" />
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} justify="center" boxShadow={0}>
                        
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

<div>
    <img src="media/icon-1.png" />
</div>
export default Header
