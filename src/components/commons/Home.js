import React, { Component } from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { render } from '@testing-library/react';
import Login from '../Login.component';
import Categorias from '../Categorias.component'

export default class Catalogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  

  render(){
    const { tasks } = this.state;
   
    
    return (
      
    <div><Login></Login></div>
    );  
  }

 
}