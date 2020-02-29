import React, {Fragment} from 'react';
import classes from './home.module.css';
import heroImage from '../images/hero.jpeg';
import play from '../images/play.jpeg';
import boy from '../images/boy.jpeg';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import  Link  from 'react-router-dom/Link';






function home () {
   

    return (
        <Fragment>

           
            
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <ul className={classes.list}>
                        <li className={classes.listitem}><span className={classes.equal}>Equal</span> <br /> <span className={classes.learning}>Learning</span></li>
                 
                        
                            {/* <Tooltip title="Products"> */}
                            <button className={classes.prodbtn}>Products</button>
                                {/* <Button style={{ fontSize: '1rem', fontFamily: 'inherit' }} color="inherit" >Products</Button> */}
                            {/* </Tooltip> */}
                        

                        {/* <Tooltip title="About Us"> */}
                        <button className="ui button"   >About Us</button>
                        {/* </Tooltip> */}
                        

                        {/* <Tooltip title="Resources"> */}
                            <button className="ui button"  >Resources</button>
                        {/* </Tooltip> */}

                        {/* <Tooltip title="Solutions"> */}
                        <button className="ui button"  >Solutions</button>
                        {/* </Tooltip> */}

                        {/* <Tooltip title="Let's Talk"> */}
                        <button className="ui button" style={{ fontSize: '1rem', fontFamily: 'inherit', background: '#2788D8', padding: '.7rem 1.4rem', borderRadius: '.5rem', color: '#fff' }} color="inherit"  >Let's Talk</button>

                        {/* </Tooltip> */}

                    </ul>
                </nav>
            </header>
            <section className={classes.hero}>
                <h1 className={classes.headingbig}>Enable all learners to reach <br /> their full potential.</h1>
                <h3 className={classes.headingsmall}>Accelerate your shift to learner-centered education.</h3>
            </section>

            <div className={classes.wrapper}>
                <section className={classes.imagine}>
                    <h1 className={classes.imagineText}>Let's reimagine education together</h1>
                    <p className={classes.paragraph}>We help our partners modernize their education models and prepare students for the future. With professional learning services and a technology platform specifically designed to put learners first, we help address the challenges schools face today. Together, we can empower every learner to drive their own learning and reach their full potential.</p>

                    <div className={classes.boxWrapper}>
                        <div className={classes.box}>
                            <div className={classes.playimage}>
                                {/* <img src={play} /> */}
                            </div>
                            <div className={classes.content}>
                                <p className={classes.profession}>Professional Learning</p>
                                <p className={classes.help}>Help educators increase effectiveness and empower their learners.</p>
                                <p className={classes.customized}>Customized professional learning pathways leading to the articulation of strong learner-centered outcomes, supporting educators in developing effective instructional practices, and creating  the enabling condition that results in transformative change.</p>
                                <button className="ui button" >Learn More</button>
                            </div>

                        </div>

                        <div className={classes.box}>
                            <div className={classes.boy}>
                                {/* <img src={boy} /> */}
                            </div>
                            <div className={classes.content}>
                                <p className={classes.profession}>Learning Platform</p>
                                <p className={classes.help}>Make learning visible and meanigful for all learners</p>
                                <p className={classes.customized}>Powerful technology platform allowing educators and students to co-create individual learning pathways, track and measure growth along the way, and enable meanigful engagement throughout the learning cycle.</p>
                                <button className="ui button">Learn More</button>

                            </div>

                        </div>
                    </div>
                    


                </section>


               

            </div>
            <footer className={classes.footer}>
                <p className={classes.copy}> &copy; 2019 EqualLearning. All right reserved. A subsidiary of Nika-Alpha</p>
                <span className={classes.kids}>
                    <a href="https://en.wikipedia.org/wiki/Children%27s_Online_Privacy_Protection_Act">Kids Privacy Policy</a> 
                    <a href="">Terms of use</a> 

                </span>
                </footer>
                    
                     
            
            
        </Fragment>
        
    )
}

export default home;