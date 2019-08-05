// @flow

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

// let a: string = 5;

/**
 * Creates custom buttons based on user input
 *
 */
type CustomButtonProps = {
  /** Button bg color */
  color: string,
  /** Button size */
  size: number,
  /** Button label */
  text: string,
};

let CustomButton = (props: CustomButtonProps) => (
  <div
    style={{
      backgroundColor: props.color,
      width: props.size,
      height: props.size / 2,
    }}
  >
    {props.text}
  </div>
);

let TestPageTemplate = () => (
  <CustomButton color='yellow' size={150} text='Click me!' />
);

type TestPageProps = {
  /* No props */
};
class TestPage extends Component<TestPageProps> {
  render = () => <TestPageTemplate />;
}

export default TestPage;
