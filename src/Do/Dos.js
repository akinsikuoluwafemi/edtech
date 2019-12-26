import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import classes from './Do.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Do from './Do';

class Dos extends Component {
    constructor(props){
        super(props);
        this.postID = 0;

        this.state = {
            postArray: [],
            goal: '',
            checks: '',
            timeline: '',
            id: ""

        }
    }

     deleteEvent =(index)=> {
        const copyPostArray = Object.assign([], this.state.postArray);
        copyPostArray.splice(index, 1);
        this.setState({
           postArray: copyPostArray 
        })
     }
    
    setPost =(e) => {
        this.setState({
            goal: e.target.value,
        })
    }

     setAnotherPost = e => {
        this.setState({ checks: e.target.value})
        
     }
    setNewPost = e => {
        this.setState({ timeline: e.target.value})
    }

    addPost = () => {
        this.postID = this.postID + 1;
        const copyPostArray = Object.assign([], this.state.postArray)
        copyPostArray.push({
            id: this.postID,
            goal: this.state.goal,
            checks: this.state.checks,
            timeline: this.state.timeline,
        })
        this.setState({postArray: copyPostArray})
    }
    onSubmit =(e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className={classes.goals}>
                        <p className={classes.goal}>Goal</p>
                    <textarea name="goal" onBlur={this.setPost}  style={{ fontSize: '1.3rem' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }} className={classes.goals}>
                        < p style={{ marginLeft: '1rem' }} className={classes.text}>Checks</p>
                    <TextField id="filled-basic" label="Weekly/biweekly" variant="filled" name="checks" onBlur={this.setAnotherPost} />
                    </div>
                    <div className={classes.goals}>
                        <p className={classes.text}>Time-Line</p>
                    <TextField id="filled-basic" label="For two months" variant="filled" name="timeline"  onBlur={this.setNewPost} />
                    </div>
                <Button style={{ background: '#85BF31', color: 'white', marginLeft: '5rem', marginTop: '2rem' }} type="submit" onClick={this.addPost} onSubmit={this.onSubmit}>Create Goal</Button>

            </form>
            <Grid container className={classes.form} spacing={3} >
                {this.state.postArray.map((post, index) => (
                    <Do
                        key={post.id}
                        goal={post.goal}
                        checks={post.checks}
                        timeline={post.timeline}
                        delete={this.deleteEvent.bind(this, index)}
                    />
                ))}

            </Grid>
        </div>    



        )
    }
}

export default Dos;
