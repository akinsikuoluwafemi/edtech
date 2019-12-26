import React, { Component } from 'react';
import classes from './Do.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class Do extends Component {
   
    render(){
     
        return (
                
                
                    <Grid item sm >
                        <div className={classes.box}>
                            <p className={classes.comm}>{this.props.goal}</p>
                            <div className={classes.when}>
                                <div className={classes.ci}></div>
                                <p className={classes.time}>Check in <span>{this.props.checks}</span> until <span>{this.props.timeline}</span></p>
                            </div>
                        </div>
                    <button style={{marginLeft: '-35rem'}} onClick={this.props.delete}>Delete</button>
                        

                    </Grid>
           
             
                    
                    





            
        )
    }
}



export default Do;



