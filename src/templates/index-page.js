import React, { Component } from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import logo from '../img/mg-logo-transparent.svg';
import guyImg from '../img/guy.jpg';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';

const MG = {
  FirstPost: () => (
    <Paper style={{ padding: 0 }}>
      {/* <img
                src={guyImg}
                style={{
                  width: '20%',
                  height: 'auto',
                  float: 'right',
                  borderRadius: 17,
                }}
              ></img> */}
      <Box
        style={{
          height: 200,
          backgroundImage: `url(${guyImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant='h6'>HELLO</Typography>
      </Box>

      <Typography variant='body1' align='justify'>
        Hi, I’m Marino Guerieri, a web developer and tech support specialist
        using HTML, CSS, WordPress, React. You can find more about me and my
        work here.
      </Typography>
      <Typography variant='body1' align='justify'>
        I’m a huge fan of sticky notes and this website draws inspiration upon
        it. Please use navigation to explore the topics.
      </Typography>
      <Grid container>
        <Grid item xs={8}>
          <Button variant='outlined'>ABOUT ME</Button>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body2' align='right'>
            2019/08/11
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  ),
  SecondPost: () => (
    <Paper style={{ padding: 10 }}>
      <Typography variant='h6'>HELLO</Typography>
      {/* <Button>HELLO</Button> */}
      <img
        src={guyImg}
        style={{
          width: '20%',
          height: 'auto',
          float: 'right',
          borderRadius: '20px',
        }}
      ></img>
      <Typography variant='body1' align='justify'>
        Hi, I’m Marino Guerieri, a web developer and tech support specialist
        using HTML, CSS, WordPress, React. You can find more about me and my
        work here.
      </Typography>
      <Typography variant='body1' align='justify'>
        I’m a huge fan of sticky notes and this website draws inspiration upon
        it. Please use navigation to explore the topics.
      </Typography>
      <Grid container>
        <Grid item xs={8}>
          <Button variant='outlined'>ABOUT ME</Button>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='body2' align='right'>
            2019/08/11
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  ),

  BottomAppBar: () => {
    const useStyles = makeStyles(theme => ({
      title: {
        flexGrow: 1,
      },
      appBar: {
        top: 'auto',
        bottom: 0,
      },
      grow: {
        flexGrow: 1,
      },
      fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        right: 50,
      },
    }));

    const classes = useStyles();

    return (
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            style={{
              padding: 5,
            }}
          >
            <Avatar
              alt='Marino Guereri'
              src={logo}
              style={{
                width: 50,
                height: 'auto',
              }}
            />
          </IconButton>
          <Typography variant='h5' className={classes.title}>
            Marino Guerieri
          </Typography>
          <Fab
            color='primary.dark'
            aria-label='add'
            className={classes.fabButton}
          >
            <MenuIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    );
  },

  PinnedOrOthers: props => (
    /* By default returns 'Others', unless isPinned=true */
    <Typography variant='body2' style={{ marginBottom: 5 }}>
      {props.isPinned ? 'PINNED' : 'OTHERS'}
    </Typography>
  ),

  SimplePopover: () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }

    function handleClose() {
      setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <div>
        <Button aria-describedby={id} variant='contained' onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography>The content of the Popover.</Typography>
        </Popover>
      </div>
    );
  },

  Theme: props => {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#ffffff',
        },
        secondary: {
          main: '#333333',
        },
      },
    });

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
  },
};

export const IndexPageTemplate = () => {
  return (
    /* Box should fill the whole window, thus height=100vh */
    <MG.Theme>
      <Box bgcolor='primary.light' height='100vh'>
        <Container style={{ paddingTop: 20 }}>
          <MG.PinnedOrOthers isPinned />
          <MG.FirstPost />
          <MG.PinnedOrOthers />
          <MG.SecondPost />
        </Container>

        <MG.BottomAppBar />
      </Box>
    </MG.Theme>
  );
};

class IndexPage extends Component {
  render = () => <IndexPageTemplate />;
}

export default IndexPage;
