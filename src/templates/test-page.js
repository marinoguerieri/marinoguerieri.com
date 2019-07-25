import React, { Component } from 'react';
import logo from '../img/mg-logo.svg';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
// import * as MUICore from '@material-ui/core';

export const TestPageTemplate = () => {
  return (
    <>
      <Paper square>Paper test.</Paper>
    </>
  );
};

class TestPage extends Component {
  componentWillMount = () => {
    document.body.style.backgroundColor = 'green';
    document.head.style.height = '100%';
    document.body.style.height = '100%';
  };

  render = () => <TestPageTemplate />;
}

export default TestPage;
