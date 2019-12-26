import React, { Component } from 'react'
import styled from 'styled-components';
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import classes from './test.module.css';
import TextField from '@material-ui/core/TextField';
import butterfly from '../../images/butterfly-use.jpeg';
import GeneralKnowledge from '../../images/General-Knowledge-For-Kids-105-Questions-and-Answers.jpg';
import dinoseur from '../../images/dinoseur.jpeg';
import ns from '../../images/ns.png';
import pollution from '../../images/social-studies.jpeg';
import mathsfun from '../../images/math-fun.jpeg';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    width: 100%;
    padding: 32px;
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 200px;
    width: 500px;
    border-radius: 3px;

    

`;

const Item = styled.div`
    padding: 10px;
    color: #555;
    background-color: white;
    border-radius: 3px;
    height: 20rem;
`;

const droppableStyle = {
    backgroundColor: '#555',
    width: '250px',
    margin: '32px',
    borderRadius: '3px'

}

const droppableStyle2 = {
    backgroundColor: '#555',
    width: '250px',
    height: '350px',   
    margin: '32px',
    marginLeft: '100px',
    paddingLeft: '20px',
    borderRadius: '3px'


}
const one = {
    backgroundColor: '#555',
    width: '250px',
    height: '350px',
    margin: '32px',
    paddingLeft: '20px',
    marginLeft: '-10px',
}
const fit = {
    marginLeft: '3rem',
    display: 'grid',
    gridTemplateColumns: '200px 200px',
    // gridTemplateColumns: 'repeat(2, minmax(autoFit, 200px))',

    justifyContent: 'space-between',
    height: '205px',
    // gridRow: 'auto auto',
    // gridColumnGap: '20px',
    // gridRowGap: '20px'
}

export default class DndTest extends Component {
    render() {
        return (
            <Wrapper>
                <Droppable id="dr1" style={droppableStyle}>
                    <h2 style={{ color: 'white', textAlign: "center" }}>Assigned</h2>
                    
                    <Link to="/evidence">
                        <Draggable id="item1" style={{ margin: '8px' }}><Item>

                            <TextField style={{ marginLeft: '.5rem' }} id="filled-basic" label="What is Today" variant="outlined" />
                            <img style={{ objectFit: 'contain', width: '100%', marginTop: '1rem' }} src={butterfly} alt="butterfly image" />
                            <p>The evidence of change over time</p>
                        </Item>

                        </Draggable>
                    </Link>
                    
                    <Link to="/generalquestions">
                        <Draggable id="item2" style={{ margin: '8px' }}>

                            <Item>
                                <TextField id="filled-basic" label="What is Today" variant="outlined" />
                                <img style={{ objectFit: 'contain', width: '100%', marginTop: '1rem' }} src={GeneralKnowledge} alt="generalknowledge-image" />
                                <p>General Questions</p>
                            </Item>
                        </Draggable>
                    </Link>
                    
                    <Link to="/fossil">
                        <Draggable id="item3" style={{ margin: '8px' }}>
                            <Item>
                                <TextField id="filled-basic" label="What is Today" variant="outlined" />
                                <img style={{ objectFit: 'contain', width: '100%', marginTop: '1rem' }} src={dinoseur} alt="dinoseur-image" />
                                <p>The fossil record activity</p>
                            </Item>
                        </Draggable>
                    </Link>
                    
                    <Link to="/pollution">
                        <Draggable id="item4" style={{ margin: '8px' }}>
                            <Item>
                                <TextField id="filled-basic" label="What is Today" variant="outlined" />
                                <img style={{ objectFit: 'contain', width: '100%', marginTop: '1rem' }} src={pollution} alt="pollution-image" />
                                <p>How to stop pollution</p>
                            </Item>
                        </Draggable>
                    </Link>
                    
                    <Link to="/maths">
                        <Draggable id="item5" style={{ margin: '8px' }}>
                            <Item>
                                <TextField id="filled-basic" label="What is Today" variant="outlined" />
                                <img style={{ objectFit: 'contain', width: '100%', marginTop: '1rem' }} src={mathsfun} alt="maths-image" />
                                <p>Have fun with maths</p>
                            </Item>
                        </Draggable>
                    </Link>
                    
                    <Link to="/naturalselection">
                        <Draggable id="item6" style={{ margin: '8px' }}>
                            <Item>
                                <TextField id="filled-basic" label="What is Today" variant="outlined" />
                                <img style={{ objectFit: 'contain', width: '100%', marginTop: '1rem' }} src={ns} alt="natural-selection-image" />
                                <p>What is Natural Selection ?</p>
                            </Item>
                        </Draggable>   
                        
                    </Link>
                    <Link to="">
                        <Draggable id="item7" style={{ margin: '8px' }}><Item><TextField id="filled-basic" label="What is Today" variant="outlined" /></Item></Draggable>                    
                    </Link>

                </Droppable>

                










                <div style={fit}>
                    <Droppable id="dr2" style={one} >

                    </Droppable>
                    <Droppable id="dr3" style={droppableStyle2}>

                    </Droppable>
                    <Droppable id="dr4" style={one}>

                    </Droppable>
                    <Droppable id="dr5" style={droppableStyle2}>

                    </Droppable>
                    <Droppable id="dr6" style={one}>

                    </Droppable>
                    <Droppable id="dr7" style={droppableStyle2}>

                    </Droppable>
                    <Droppable id="dr8" style={one}>

                    </Droppable>
                </div>
                
            </Wrapper>
        )
    }
}



