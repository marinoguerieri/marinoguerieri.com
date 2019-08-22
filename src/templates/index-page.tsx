import React, { Component, useState } from 'react';
import Layout from '../components/Layout';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import LabelIcon from '@material-ui/icons/LabelOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import WorkIcon from '@material-ui/icons/WorkOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
// @ts-ignore
import logo from '../img/mg-logo-transparent.svg';
// @ts-ignore
import guyImg from '../img/guy.jpg';
// @ts-ignore
import samplePostFeaturedImg from '../img/react-post.jpeg';
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
// @ts-ignore
import uuidv4 from 'uuid/v4';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
// @ts-ignore
import GithubIconImg from '../img/github-icon.svg';
// @ts-ignore
import LinkedInIconImg from '../img/linkedin-icon.png';
import { string } from 'prop-types';

interface CustomIconProps {
  imgUrl: string;
  imgAlt: string;
  style: object;
}

const GithubIcon = (props: {}) => (
  <MG_ImageComponent
    imgUrl={GithubIconImg}
    imgAlt='Github icon'
    style={props.style}
  />
);

const LinkedInIcon = (props: CustomIconProps) => (
  <MG_ImageComponent
    imgUrl={LinkedInIconImg}
    imgAlt='LinkedIn icon'
    style={props.style}
  />
);

// Helper for menu icons
const MG_ImageComponent = (props: CustomIconProps) => (
  <img src={props.imgUrl} alt={props.imgAlt} style={props.style} />
);

const MyContext = React.createContext();

interface MyProviderState {
  isPostBeingRead: boolean;
  postBeingReadId: boolean | null;
}

interface MyContextProviderValue {
  state: MyProviderState;
  updateState: Function;
}

class MyProvider extends Component {
  state: MyProviderState = {
    isPostBeingRead: false,
    postBeingReadId: null,
  };

  updateState = (newState: object) => {
    this.setState(newState);
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateState: this.updateState,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

interface MG_PostProps {
  id: string; // uuidv4() identifier
}

const MG_Post = (props: MG_PostProps) => (
  <MyContext.Consumer>
    {(value: MyContextProviderValue) => (
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
              postBeingReadId: props.id,
            });
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
        {value.state.isPostBeingRead &&
        // Code doesn't work: Fix
        // @ts-ignore
        value.state.postBeingReadId == props.id ? (
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

interface MG_MenuItemProps {
  icon: JSX.Element /* ? */;
  text: string;
  shouldShowCount: boolean;
  count?: number /* Actually, should be required if shouldShowCount==true */;
}

const MG_MenuItem = (props: MG_MenuItemProps) => {
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

interface MG_MenuItem {
  title: string;
  icon: JSX.Element;
  count?: number;
}

interface MG_MenuSectionProps {
  title: string;
  items: MG_MenuItem[];
  shouldShowCount: boolean;
}

const MG_MenuSection = (props: MG_MenuSectionProps) => {
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

const MG_BottomAppBar = () => {
  // @ts-ignore
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
      {(value: MyContextProviderValue) => (
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
                  width: 40,
                  height: 'auto',
                }}
              />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
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
};

interface MG_PinnedOrOthersProps {
  isPinned: boolean; // Refactor to Enum(pinned,others)
}

const MG_PinnedOrOthers = (props: MG_PinnedOrOthersProps) => (
  /* By default returns 'Others', unless isPinned=true */
  <Typography variant='body2' style={{ marginBottom: 5 }}>
    {props.isPinned ? 'PINNED' : 'OTHERS'}
  </Typography>
);

interface MG_ThemeProps {
  children: JSX.Element /* ? Multiple elements */;
}

const MG_Theme = (props: MG_ThemeProps) => {
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
};

const MG_ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });

  // test2

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  /* TODO: Fix types */
  const handleChange = (input: string) => (e: object) => {
    console.log('e.target is: ', e.target.value);
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact-form',
        ...formData,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <Container
      style={{
        // display: 'none', // -> SHOW/HIDE DURING DEVELOPMENT !
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
      }}
    >
      <Paper
        elevation={16}
        square={false}
        style={{
          borderRadius: 50,
          padding: 20,
        }}
      >
        <Typography variant='h5'>Feel free to leave me a message.</Typography>

        <Typography variant='body1'>
          Just use the contact form below or contact me directly at&nbsp;
          <Link
            href='mailto:marino@marinoguerieri.com'
            color='inherit'
            style={{ fontWeight: 500 }}
          >
            marino@marinoguerieri.com
          </Link>
          &nbsp;(it goes to my email inbox either way :-)
        </Typography>

        <form name='contact-form' data-netlify='true' onSubmit={handleSubmit}>
          {/* You still need to add the hidden input with the form name to your JSX form. */}
          <input type='hidden' name='form-name' value='contact-form' />

          <TextField
            fullWidth
            required
            id='outlined-required'
            label='Full Name'
            margin='normal'
            variant='outlined'
            value={formData.fullName}
            onChange={handleChange('fullName')}
            name='fullName'
          />
          <br />
          <TextField
            fullWidth
            required
            id='outlined-required'
            label='Email Adress'
            margin='normal'
            variant='outlined'
            value={formData.email}
            onChange={handleChange('email')}
            name='email'
          />
          <br />
          <TextField
            fullWidth
            id='outlined-required'
            label='Company'
            margin='normal'
            variant='outlined'
            value={formData.company}
            onChange={handleChange('company')}
            name='company'
          />
          <br />
          <TextField
            fullWidth
            required
            id='filled-multiline-flexible'
            label='Message'
            multiline
            rows='4'
            margin='normal'
            variant='outlined'
            value={formData.message}
            onChange={handleChange('message')}
            name='message'
          />

          <Typography variant='subtitle2'>
            By sending this message, I consent to collection of personal data as
            described in Privacy Policy.
          </Typography>

          <Button
            type='submit'
            variant='contained'
            color='secondary'
            size='large'
            fullWidth={true}
          >
            <SendIcon />
            Send
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export const IndexPageTemplate = () => {
  const developmentMode = false;

  if (developmentMode) {
    return (
      <Grid
        container
        style={{
          height: '100vh',
          padding: 20,
          backgroundColor: 'rgb(245,245,245)',
        }}
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Paper
            square={false}
            elevation={8}
            style={{ padding: 20, borderRadius: 50 }}
          >
            <Box
              display='flex'
              justifyContent='center'
              style={{ marginBottom: 20 }}
            >
              <Avatar
                alt='Marino Guereri'
                src={logo}
                style={{
                  width: 80,
                  height: 'auto',
                }}
              />
            </Box>

            <Typography variant='body1'>
              Hi, I'm <span style={{ fontWeight: 500 }}>Marino Guerieri</span>,
              a web developer and technical support specialist.
              <br />
              <br />
              This website is currently under development. It will be done soon
              so please come back and check it out. :-)
              <br />
              <br />
              If you need to contact me, I'm available at&nbsp;
              <Link
                href='mailto:marino@marinoguerieri.com'
                color='inherit'
                style={{ fontWeight: 500 }}
              >
                marino@marinoguerieri.com
              </Link>
              . In the meantime, you can check out my{' '}
              <Link
                href='https://github.com/marinoguerieri'
                color='inherit'
                style={{ fontWeight: 500 }}
              >
                Github
              </Link>
              &nbsp;&amp;&nbsp;
              <Link
                href='https://www.linkedin.com/in/marino-guerieri/'
                color='inherit'
                style={{ fontWeight: 500 }}
              >
                LinkedIn
              </Link>{' '}
              profiles.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  } else {
    return (
      /* Box should fill the whole window, thus height=100vh */
      <MyProvider>
        <MG_Theme>
          <Box bgcolor='primary.light' height='100vh'>
            {/* ----------------- CONTACT FORM ------------------- */}
            <MG_ContactForm />
            {/* ----------------- /CONTACT FORM -------------------*/}

            {/* --------------------- MENU ------------------------*/}
            <Container
              style={{
                display: 'none', // -> SHOW/HIDE DURING DEVELOPMENT !
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 20,
              }}
            >
              {/* Pages */}
              <MG_MenuSection
                title='Pages'
                shouldShowCount={false}
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
                shouldShowCount={false}
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
            </Container>
            {/* --------------------- /MENU ------------------------*/}

            {/* -------------------- ARCHIVE -----------------------*/}
            {/* Pages */}
            <Container
              style={{
                display: 'none', // -> SHOW/HIDE DURING DEVELOPMENT !
                paddingTop: 20,
              }}
            >
              <MG_PinnedOrOthers isPinned />
              <MG_Post id={uuidv4()} />
              <MG_PinnedOrOthers />
              <MG_Post id={uuidv4()} />
              <MG_Post id={uuidv4()} />
              <MG_Post id={uuidv4()} />
              <MG_Post id={uuidv4()} />
            </Container>
            {/* -------------------- /ARCHIVE ---------------------*/}

            {/* ------------------ SINGLE POST --------------------*/}
            <Container
              style={{
                display: 'none', // -> SHOW/HIDE DURING DEVELOPMENT !
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 20,
              }}
            >
              <Paper
                elevation={16}
                square={false}
                style={{
                  borderRadius: 50,
                  height: '90vh',
                  overflow: 'auto',
                }}
              >
                <Box
                  style={{
                    padding: 20,
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${samplePostFeaturedImg})`,
                    height: 300,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    borderRadius: '50px 50px 0 0',
                    // flex
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'flex-end',
                  }}
                >
                  <Box flexGrow={1}></Box>
                  <Typography
                    variant='h5'
                    style={
                      {
                        // paddingTop: 50,
                        // backgroundColor: 'rgba(200,200,200,0.5)',
                      }
                    }
                  >
                    REACT V654.2.3 IS COMING OUT!
                  </Typography>
                  <Typography variant='subtitle1'>2019/12/32</Typography>
                </Box>

                <Box style={{ padding: 20 }}>
                  <Typography variant='body1'>
                    Today is the big day. New release of React is coming out and
                    with that many new features that we will never use.
                    &lt;SomeCode someProp=&rdquo;someValue&rdquo;&gt; is the new
                    standard of writing code that makes no sense.
                    <br />
                    <br />
                    if (newProp != oldProp) &lt;SomeOtherComponent&gt; React was
                    created by Jordan Walke, a software engineer at Facebook,
                    who released an early prototype of React called
                    &quot;FaxJS&quot;.[9][10] He was influenced by XHP, an HTML
                    component framework for PHP.[11] It was first deployed on
                    Facebook's News Feed in 2011 and later on Instagram in 2012.
                    [12] It was open-sourced at JSConf US in May 2013. [10]
                    React Native, which enables native Android, iOS, and UWP
                    development with React, was announced at Facebook's React
                    Conf in February 2015 and open-sourced in March 2015.
                    <br />
                    <br />
                    On April 18, 2017, Facebook announced React Fiber, a new
                    core algorithm of React framework library for building user
                    interfaces.[13] React Fiber was to become the foundation of
                    any future improvements and feature development of the React
                    framework. [14][needs update] On April 19, 2017, React 360
                    V1.0.0 was released to the public.[15] This allowed
                    developers with React experience to jump into virtual
                    reality development.
                    <br />
                    <br />
                    On September 26, 2017, React 16.0 was released to the
                    public.[16] On February 16, 2019, React 16.8 was released to
                    the public.[17] The release introduced React Hooks. [18].
                    That&rsquo;s it.
                  </Typography>
                  <br />
                  <br />
                  <Button>BLOG</Button>
                  <Button>REACT</Button>
                </Box>
              </Paper>
              {/* Add some space */}
              <Box height='100px'></Box>
            </Container>
            {/* ------------------ /SINGLE POST -------------------*/}

            <MG_BottomAppBar />
          </Box>
        </MG_Theme>
      </MyProvider>
    );
  }
};

class IndexPage extends Component {
  render = () => (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
}

export default IndexPage;
