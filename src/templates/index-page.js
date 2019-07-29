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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
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

export const IndexPageTemplate = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    /* Box should fill the whole window, thus height=100vh */
    <ThemeProvider theme={theme}>
      <Box bgcolor='primary.light' height='100vh'>
        <Container style={{ paddingTop: 20 }}>
          <Typography variant='body2' style={{ marginBottom: 5 }}>
            PINNED
          </Typography>
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
              Hi, I’m Marino Guerieri, a web developer and tech support
              specialist using HTML, CSS, WordPress, React. You can find more
              about me and my work here.
            </Typography>
            <Typography variant='body1' align='justify'>
              I’m a huge fan of sticky notes and this website draws inspiration
              upon it. Please use navigation to explore the topics.
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
          <Typography variant='body2' style={{ marginBottom: 5 }}>
            OTHERS
          </Typography>
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
              Hi, I’m Marino Guerieri, a web developer and tech support
              specialist using HTML, CSS, WordPress, React. You can find more
              about me and my work here.
            </Typography>
            <Typography variant='body1' align='justify'>
              I’m a huge fan of sticky notes and this website draws inspiration
              upon it. Please use navigation to explore the topics.
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
        </Container>

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
      </Box>
    </ThemeProvider>
  );
};

class IndexPage extends Component {
  componentWillMount = () => {
    // /* Apply styles to body */
    // document.body.style.backgroundColor = 'green';
  };

  render = () => <IndexPageTemplate />;
}

export default IndexPage;
