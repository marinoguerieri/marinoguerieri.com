import React, { Component, useState } from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import LabelIcon from '@material-ui/icons/LabelOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import WorkIcon from '@material-ui/icons/WorkOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
import HomeIcon from '@material-ui/icons/HomeOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import uuidv4 from 'uuid/v4';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';

import GithubIconImg from '../img/github-icon.svg';
import LinkedInIconImg from '../img/linkedin-icon.png';
const GithubIcon = props => (
  <MG_ImageComponent
    imgUrl={GithubIconImg}
    imgAlt='Github icon'
    style={props.style}
  />
);
const LinkedInIcon = props => (
  <MG_ImageComponent
    imgUrl={LinkedInIconImg}
    imgAlt='LinkedIn icon'
    style={props.style}
  />
);

// Helper for menu icons
const MG_ImageComponent = props => (
  <img src={props.imgUrl} alt={props.imgAlt} style={props.style} />
);

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    isPostBeingRead: false,
    postBeingReadId: null,
  };

  updateState = newState => {
    this.setState(newState);
  };

  render() {
    return (
      <MyContext.Provider
        value={{ state: this.state, updateState: this.updateState }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class MG_Post extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => (
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
              onClick={() => {
                value.updateState({
                  isPostBeingRead: true,
                  postBeingReadId: this.props.id,
                });
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
            {value.state.isPostBeingRead &&
            value.state.postBeingReadId == this.props.id ? (
              <Paper elevation={8}>
                <Box
                  style={{
                    width: '50vw',
                    height: '50vh',
                  }}
                >
                  Single post contents<div style={{ height: 1000 }}></div>
                </Box>
              </Paper>
            ) : (
              <></>
            )}
          </Paper>
        )}
      </MyContext.Consumer>
    );
  }
}

const MG_MenuItem = props => {
  return (
    <Button
      style={{
        width: '100%',
        paddingTop: '100%',
      }}
      variant='contained'
      color='primary'
    >
      <Box
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box>
          {React.cloneElement(props.icon, {
            style: {
              width: '50%',
              height: 'auto',
            },
          })}
          <br />
          {props.text} {props.shouldShowCount ? `(${props.count})` : ''}
        </Box>
      </Box>
    </Button>
  );
};

const MG_MenuSection = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const useStyles = makeStyles(theme => ({
    root: {
      marginBottom: theme.spacing(4),
    },
  }));
  const classes = useStyles();

  const menuItemsOnGrid = props.items.map(item => (
    <Grid key={uuidv4()} item xs={3}>
      <MG_MenuItem
        key={uuidv4()}
        text={item.title}
        icon={item.icon}
        shouldShowCount={props.shouldShowCount}
        count={item.count}
      />
    </Grid>
  ));

  return (
    <Paper elevation={4} className={classes.root}>
      <Typography variant='body1' style={{ float: 'left' }}>
        {props.title}
      </Typography>

      {menuItemsOnGrid.length > 4 ? (
        <Button onClick={() => toggleIsExpanded()} style={{ float: 'right' }}>
          {isExpanded ? 'Less' : 'More'}
        </Button>
      ) : (
        <></>
      )}

      {/* <Grid container spacing={2}>
        {props.items.map((item, indeks) => (
          <Grid item xs={3}>
            {indeks}
            <MG_MenuItem text={item.title} icon={item.icon} count={item.count} />
          </Grid>
        ))}
      </Grid> */}

      {/* First 4 items (always shown) */}
      <Grid container spacing={2}>
        {menuItemsOnGrid.map((item, index) => {
          if (index < 4) return item;
          /* We need to return something and it needs to have a key,
            otherwise there will be a warning */ else
            return <React.Fragment key={uuidv4()}></React.Fragment>;
        })}
      </Grid>

      {/* Other items (collapsible) */}
      <Collapse in={isExpanded}>
        <Grid container spacing={2}>
          {/* Added empty row to retain row spacing (appearance of continuity) */}
          <Grid item xs={12}></Grid>
          {menuItemsOnGrid.map((item, index) => {
            if (index > 4) return item;
            else return <React.Fragment key={uuidv4()}></React.Fragment>;
          })}
        </Grid>
      </Collapse>

      {/* </Grid> */}

      {/* Manualno */}
      {/* <Grid container spacing={2}>
        <Grid item xs={3}>
          <MG_MenuItem text='test' icon={MenuIcon} count={5} />
        </Grid>
        <Grid item xs={3}>
          <MG_MenuItem text='test' icon={MenuIcon} count={5} />
        </Grid>
        <Grid item xs={3}>
          <MG_MenuItem text='test' icon={MenuIcon} count={5} />
        </Grid>
        <Grid item xs={3}>
          <MG_MenuItem text='test' icon={MenuIcon} count={5} />
        </Grid>
      </Grid>
  
      <Collapse in={true}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <MG_MenuItem text='test' icon={MenuIcon} count={5} />
          </Grid>
          <Grid item xs={3}>
            <MG_MenuItem text='test' icon={MenuIcon} count={5} />
          </Grid>
          <Grid item xs={3}>
            <MG_MenuItem text='test' icon={MenuIcon} count={5} />
          </Grid>
          <Grid item xs={3}>
            <MG_MenuItem text='test' icon={MenuIcon} count={5} />
          </Grid>
          <Grid item xs={3}>
            <MG_MenuItem text='test' icon={MenuIcon} count={5} />
          </Grid>
          <Grid item xs={3}>
            <MG_MenuItem text='test' icon={MenuIcon} count={5} />
          </Grid>
        </Grid>
      </Collapse> */}
    </Paper>
  );
};

const MG = {
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
      <MyContext.Consumer>
        {value => (
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
                onClick={() => {
                  if (value.state.isPostBeingRead) {
                    // Close the post
                    value.updateState({
                      isPostBeingRead: false,
                      postBeingReadId: null,
                    });
                  } else {
                    // Open menu
                    // ...
                  }
                }}
                color='primary'
                aria-label='add'
                className={classes.fabButton}
              >
                {value.state.isPostBeingRead ? <ArrowBackIcon /> : <MenuIcon />}
              </Fab>
            </Toolbar>
          </AppBar>
        )}
      </MyContext.Consumer>
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
    <MyProvider>
      <MG.Theme>
        <Box bgcolor='primary.light' height='100vh'>
          {/* Menu */}
          <Container
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 20,
            }}
          >
            {/* Pages */}
            <MG_MenuSection
              title='Pages'
              items={[
                { title: 'Homepage', icon: <HomeIcon /> },
                { title: 'About me', icon: <PersonIcon /> },
                { title: 'Portfolio', icon: <WorkIcon /> },
                { title: 'Blog', icon: <CollectionsBookmarkIcon /> },
              ]}
            />

            {/* Topics */}
            <MG_MenuSection
              title='Topics'
              shouldShowCount={true}
              items={[
                { title: 'React', count: 31, icon: <LabelIcon /> },
                { title: 'Wordpress', count: 23, icon: <LabelIcon /> },
                { title: 'SEO', count: 43, icon: <LabelIcon /> },
                { title: 'Joomla', count: 53, icon: <LabelIcon /> },
                { title: 'Plugins', count: 1, icon: <LabelIcon /> },
                { title: 'PHP', count: 87, icon: <LabelIcon /> },
                { title: 'JS', count: 11, icon: <LabelIcon /> },
                { title: 'ELementor', count: 23, icon: <LabelIcon /> },
                { title: 'JSX', count: 43, icon: <LabelIcon /> },
                { title: 'Hardware', count: 11, icon: <LabelIcon /> },
                { title: 'Software', count: 8, icon: <LabelIcon /> },
                { title: 'Drupal', count: 6, icon: <LabelIcon /> },
              ]}
            />

            {/* My Profiles */}
            <MG_MenuSection
              title='My Profiles'
              items={[
                { title: 'Github', icon: <GithubIcon /> },
                { title: 'LinkedIn', icon: <LinkedInIcon /> },
              ]}
            />

            {/* Contact button */}

            <Button
              variant='contained'
              color='secondary'
              size='large'
              fullWidth={true}
            >
              <MessageOutlinedIcon />
              Send me a message
            </Button>

            {/* <Paper>
              <Typography variant='body1'>Pages</Typography>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <MG_MenuItem text='Homepage' icon={HomeIcon} />
                </Grid>
                <Grid item xs={3}>
                  <MG_MenuItem text='About Me' icon={PersonIcon} />
                </Grid>
                <Grid item xs={3}>
                  <MG_MenuItem text='Portfolio' icon={WorkIcon} />
                </Grid>
                <Grid item xs={3}>
                  <MG_MenuItem text='Blog' icon={CollectionsBookmarkIcon} />
                </Grid>
              </Grid>
            </Paper> */}
          </Container>

          {/* Pages */}
          {/* <Container style={{ paddingTop: 20 }}>
            <MG.PinnedOrOthers isPinned />
            <MG_Post id={uuidv4()} />
            <MG.PinnedOrOthers />
            <MG_Post id={uuidv4()} />
            <MG_Post id={uuidv4()} />
            <MG_Post id={uuidv4()} />
            <MG_Post id={uuidv4()} />
          </Container> */}

          <MG.BottomAppBar />
        </Box>
      </MG.Theme>
    </MyProvider>
  );
};

class IndexPage extends Component {
  render = () => <IndexPageTemplate />;
}

export default IndexPage;
