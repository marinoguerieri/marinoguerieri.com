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

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

class TestPageTemplate extends Component {
  state = {
    checked: false,
  };

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({ checked: !this.state.checked });
          }}
        >
          Click
        </Button>

        <Collapse in={this.state.checked}>
          <Paper elevation={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            aperiam, dolore quo dignissimos culpa atque voluptates soluta optio.
            Dicta omnis corporis nostrum vitae consequatur facere molestias! Hic
            facilis deleniti odio quis eveniet aspernatur cupiditate rerum
            exercitationem voluptate, est quam labore dolor mollitia corrupti
            amet! Earum corrupti, magnam deserunt provident ab impedit eligendi
            blanditiis adipisci, sint explicabo eveniet harum hic deleniti nulla
            vero voluptatum, facilis alias. Dolores eum numquam consectetur
            libero laboriosam tempora iusto maxime quam voluptatibus ducimus
            dolorum assumenda aperiam, tempore ut quisquam! Reprehenderit sequi
            quidem neque id aliquid. Dolores, ipsam placeat? Incidunt nobis
            molestias hic ratione praesentium vero culpa debitis quod, quia
            earum! Cumque consequuntur cupiditate quod neque. Dolorum ipsum qui
            officia ab quo consequatur, numquam fuga consectetur vero sapiente.
            Tempora voluptatum veritatis aut dolorum dolorem officia mollitia
            sed amet, quidem, iste iusto ipsa, similique exercitationem saepe
            sit id ex! Soluta accusantium enim at corporis, accusamus ratione
            libero laudantium ducimus culpa. Minus, tenetur perferendis veniam
            eos molestiae voluptatem deleniti iusto incidunt vero quidem rem
            amet nesciunt est consequatur consectetur deserunt nihil? Maiores ad
            cupiditate in sint nesciunt, deserunt explicabo magni id laborum
            expedita at, recusandae voluptates? Nostrum cum omnis, ea eius
            deleniti tenetur quam? Fugiat et officiis maiores facere.
          </Paper>
        </Collapse>
      </div>
    );
  }
}

class TestPage extends Component {
  render = () => <TestPageTemplate />;
}

export default TestPage;
