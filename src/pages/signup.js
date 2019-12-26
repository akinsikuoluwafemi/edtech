import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types';
import classes from './signup.module.css';
import Grid from '@material-ui/core/Grid';
import Appbar from './Appbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

 class signup extends Component {
     constructor(props){
         super(props);
         this.state = {
             email: '',
             password: '',
             confirmPassword: '',
             handle: '',
             loading: false,
             errors: {}

         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
     }


     handleChange(event) {
         this.setState({
             [event.target.name] : event.target.value
         })
     }
     
     handleSubmit (event)  {
         event.preventDefault();
         this.setState({
             loading: true 
         })
         const newUserData = {
             email: this.state.email,
             password: this.state.password,
             confirmPassword: this.state.confirmPassword,
             handle: this.state.handle
         }
         axios.post('/signup', newUserData)
         .then(res => {
             console.log(res.data)
             localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
             console.log(res.data.token)

             this.setState({loading: false})
             this.props.history.push('/Tab')
         })
         .catch(err => {
             this.setState({
                 errors: err.response.data,
                 loading: false
             })
         })
         console.log(newUserData)
     }


     
    render() {
        
        const { errors, loading } = this.state;
        return (
            <Fragment>
                <Appbar />
                <Grid container className={classes.form}>
                    <Grid item sm />
                    <Grid item sm>
                        <li className={classes.listitem}><span className={classes.equal}>Equal</span> <br /> <span className={classes.learning}>Learning</span></li>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                className={classes.textField}
                                helperText={errors.email}
                                error={errors.email ? true: false}
                                value={this.state.email}
                                onChange={this.handleChange} fullWidth/>
                            
                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                label="Password"
                                className={classes.textField}
                                helperText={errors.password}
                                error={errors.password ? true : false}
                                value={this.state.password}
                                onChange={this.handleChange} fullWidth />
                            
                            <TextField
                                id="confirmpassword"
                                name="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                className={classes.textField}
                                helperText={errors.confirmpassword}
                                error={errors.confirmpassword ? true : false}
                                value={this.state.confirmPassword}
                                onChange={this.handleChange} fullWidth />

                            <TextField
                                id="handle"
                                name="handle"
                                type="text"
                                label="Handle"
                                className={classes.textField}
                                helperText={errors.handle}
                                error={errors.handle ? true : false}
                                value={this.state.handle}
                                onChange={this.handleChange} fullWidth />

                            {errors.general && (
                                <Typography variant="body2" className={classes.customError}> {errors.general}</Typography>
                            )}
                            <Button
                                className={classes.button}
                                type="submit"
                                variant="contained"
                                style={{ color: 'white', marginTop: '2rem', background: 'green' }}
                                onSubmit={this.handleSubmit}
                                disabled={loading}>

                                {loading ? <CircularProgress size={20} style={{color: '#fff'}}/> : 'Signup'}</Button><br />
                            
                            <small >
                                Already have an account ? Login <Link style={{ color: '#2787D8' }} to="/login">here</Link>
                            </small>
                        </form>
                    </Grid>
                    <Grid item sm />

                </Grid>
            </Fragment>
           
        )
    }
}
// signup.propTypes = {

// }


export default signup;