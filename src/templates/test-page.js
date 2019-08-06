/* eslint-disable */

import React, { Component } from 'react';
import logo from '../img/mg-logo-transparent.svg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Collapse from '@material-ui/core/Collapse';

// import * as MUICore from '@material-ui/core';

const Test = () => {
  <img alt='test' />;
};

class TestPageTemplate extends Component {
  render() {
    console.log('test direktno: ', Test);
    console.log('test brackets: ', <Test />);

    return <div></div>;
  }
}

class TestPage extends Component {
  render = () => <TestPageTemplate />;
}

export default TestPage;
