import React, { Fragment, Component } from 'react';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import  Button  from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CloseIcon from '@material-ui/icons/Close';
import grifith from '../images/grifith.jpeg';
import Tooltip from '@material-ui/core/Tooltip';
import ns from '../images/ns.png';
import classes from './questions.module.css';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class selection extends Component {
    constructor(props){
        super(props);
        this.state = {
            value1: '',
            value2: '',
            open: false,
            close: true,
            
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleFile(event) {
        this.setState(prevValue => {
            return {
                open: !prevValue.open,
                close: !prevValue.close
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
            <form className={classes.wrapper} noValidate onSubmit={this.handleSubmit}>
                <header className={classes.header}>
                    <div className={classes.teacher}>
                        <img src={grifith} alt="teacher-image" style={{borderRadius: '50%', width: '4rem', height: '4rem', objectFit: 'cover'}}/>
                        <p className={classes.teachername}>Assigned by Mrs. Griffin</p>
                    </div>
                    <div className={classes.actions}>
                        <Button><ShareIcon /></Button>
                        <Button style={{ background: 'green', color: '#fff' }}>Turn In</Button>
                        <Button><CloseIcon /></Button>
                    </div>
                </header>

                <div className={classes.context}>
                    <img src={ns} alt="natural selection image" />
                    <div className={classes.contexttext}>
                        <p className={classes.contextp1}>What is natural selection ?</p>
                        <p className={classes.contextp2}>Darwin’s grand idea of evolution by natural selection is
    Relatively simple but often misunderstood.To find out how it
Works, read the article below and answer the questions.</p>
                        <a style={{color: '#ccc'}}className={classes.article} href="#">Read the article</a>
                    </div>
                </div>


                <div className={classes.challenges}>
                    <QuestionAnswerIcon />
                    <div className={classes.quest}>
                        <h2>Questions</h2>
                        <p className={classes.q}>1: What does natural selection mean in your own words?</p>
                        <textarea rows="10" cols="80" />
                        <p className={classes.q}>2: When you think about your science project, how does natural selection apply??</p>
                        <textarea rows="10" cols="80" />


                    </div>
                </div>

                <div className={classes.send}>
                    <CloudUploadIcon />

                    <div className={classes.work}>
                        <h2>Student Work</h2>
                        <Tooltip title="Add Your work">
                            <Button style={{background: '#ddd'}}>
                                <AttachmentIcon onClick={this.handleFile} />
                            </Button>
                        </Tooltip>
                    </div>

                </div>
                <div className={classes.upload}></div>
                <div style={{  textAlign: 'center' }}>
                    <button className={classes.btn}>Submit</button>

                </div>


                


            

                <Dialog
                    open={this.state.open}
                    onClose={this.state.handleClose}
                    maxWidth="sm">
                    <DialogTitle >Add a file</DialogTitle>
                    <DialogContent className={classes.dialog} style={{ borderBottom: 'thin solid #eee', padding: '1rem' }}>
                        <div style={{ display: 'flex' }}>
                            <CameraAltIcon />
                            <Typography style={{ marginLeft: '.5rem' }}>Camera</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ borderBottom: 'thin solid #eee', padding: '1rem' }}>
                        <div style={{ display: 'flex' }}>
                            <DescriptionIcon />
                            <Typography style={{ marginLeft: '.5rem' }}>Photo / Document</Typography>
                        </div>
                    </DialogContent>
                    
                    
                    <DialogActions style={{ margin: '0 auto' }}>
                        <button onClick={this.handleFile} className={classes.btn}>Cancel</button>
                        <button onClick={this.handleFile} className={classes.btn}>Save</button>

                    </DialogActions>
                </Dialog>
                
            </form>
            
        )
    }
}


export default selection;