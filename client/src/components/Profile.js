// component
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
// icon
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
// image
import img_profile from './img/img_profile.jpeg'
//color
import lime from '@material-ui/core/colors/lime';
import lightBlue from '@material-ui/core/colors/lightBlue';
//font
import { MuiThemeProvider , createTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import '../App.css'

const drawerWidth = 220;
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
const useStyles = makeStyles((theme) => ({
  Basic: {
    backgroundColor: lightBlue[500],
    width: 100,
    fontWeight:'Bold',
    
  },
  Intermidiate: {
    backgroundColor: lime[500],
    width: 150,
    fontWeight:'Bold',
  },
  root: {
    display: 'flex',
  },
  media: {
    height: 240,
    width: 300,
  },
  text_box: {
    width: 300,
  },
  timeline_start: {
    flex:'0.3',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  ListItem: {
    justifyContent: 'center',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [spacing, setSpacing] = React.useState(1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap>
            CV profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      > 
        <List>
            <ListItem button>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText >
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <WorkIcon />
                </ListItemIcon>
                <ListItemText>Work Experience</ListItemText >
            </ListItem>
            <Divider />
            <ListItem className={classes.ListItem} button onClick={handleDrawerClose}>
                <ChevronLeftIcon/>
            </ListItem>
        </List>

      </Drawer>
        <main className={classes.content}>
            <div className={classes.drawerHeader} />
            <Container maxWidth="md">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item xs={12} md={4}>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                        >
                            <Grid item xs={12}>
                              <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={img_profile}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="h6">
                                            Thawatchai Saetan
                                        </Typography>
                                    </CardContent>
                                  </CardActionArea>
                              </Card>
                            </Grid>
                            <Grid item xs={12}>
                              <Card className={classes.text_box}>
                                <CardContent>
                                  <Typography variant="h6" component="h6">
                                    About me
                                  </Typography>
                                  <Typography variant="body2" component="p">
                                    I graduated from King Mongkut’s University of Technology North Bangkok Department of Computer Science.
                                    Internship at M.A.D. Technology Develop Warehouse for rental product.
                                  </Typography>
                                </CardContent>
                              </Card>  
                            </Grid>
                            <Grid item xs={12}>
                              <Card className={classes.text_box}>
                                <CardContent>
                                  <Typography variant="h6" component="h6">
                                    Contact
                                  </Typography>
                                  <List>
                                      <ListItem>
                                          <ListItemIcon>
                                              <LocalPhoneIcon /> 
                                          </ListItemIcon>
                                          <ListItemText>084-020-6599</ListItemText >
                                      </ListItem>
                                      <ListItem>
                                          <ListItemIcon>
                                              <EmailIcon />
                                          </ListItemIcon>
                                          <ListItemText>fhufun2541@gmail.com</ListItemText >
                                      </ListItem>
                                  </List>
                                </CardContent>
                              </Card>  
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={1}
                      >
                        <Grid item xs={12} sm={12} md={12}>
                          <Card className={classes}>
                            <CardHeader
                              title="Coding Skill"
                            />
                            <CardContent>
                              <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                              >
                                <Grid item xs={4}>
                                  <Typography>C / C++</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <Chip className={classes.Intermidiate} label="Intermidiate" />
                                </Grid>
                                <Grid item xs={4}>
                                  <Typography>javascript</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <Chip className={classes.Basic} label="Basic" />
                                </Grid>
                                <Grid item xs={4}>
                                  <Typography>HTML</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <Chip className={classes.Intermidiate} label="Intermidiate" />
                                </Grid>
                                <Grid item xs={4}>
                                  <Typography>Python</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <Chip className={classes.Intermidiate} label="Intermidiate" />
                                </Grid> 
                                <Grid item xs={4}>
                                  <Typography>SQL</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <Chip className={classes.Basic} label="Basic" />
                                </Grid> 
                                <Grid item xs={4}>
                                  <Typography>CSS</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <Chip className={classes.Intermidiate} label="Intermidiate" />
                                </Grid> 
                              </Grid>
                            </CardContent>
                          </Card>  
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Card className={classes}>
                              <CardHeader
                                title="Work Experience"
                              />
                                <Timeline>
                                  <TimelineItem >
                                    <TimelineOppositeContent className={classes.timeline_start}>
                                      <Typography color="textSecondary">16-Nov-2020</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                      <TimelineDot />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                      <Typography >Start intern at M.A.D. Technology</Typography>
                                      <Typography variant="body2" component="p">- Develop Web Frontend using Quasar Framework</Typography>
                                      <Typography variant="body2" component="p">- Coding project using by Javascript and Vuejs</Typography>
                                    </TimelineContent>
                                  </TimelineItem>
                                </Timeline>
                          </Card>  
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                          <Card className={classes}>
                            <CardHeader
                              title="Education"
                            />
                            <Timeline>
                              
                              <TimelineItem >
                                <TimelineOppositeContent className={classes.timeline_start}>
                                  <Typography color="textSecondary">1-Jan-2017</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                  <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>
                                  <Typography>King Mongkut's University of Technology North Bangkok</Typography>
                                  <Typography >Numerical Project</Typography>
                                  <Typography variant="body2" component="p">- Develop Web Frontend using by Ant Design Framework and React framework.Coding project with Javascript.</Typography>
                                  <Typography variant="body2" component="p">- Coding Backend using by Nodejs , MongoDB and Docker.</Typography>
                                  <Typography >Pizzaham Project</Typography>
                                  <Typography variant="body2" component="p">- Develop Web Frontend using by Bootstrap Framework. Coding project with HTML</Typography>
                                  <Typography variant="body2" component="p">- Coding Backend using by PHP and phpmyadmin.</Typography>
                                  <Typography >THAI Ornamental Fish platform project</Typography>
                                  <Typography variant="body2" component="p">- Develop Web Frontend using by Bootstrap Framework. Coding project with HTML and Javascript.</Typography>
                                  <Typography variant="body2" component="p">- Coding Backend using by Flask Framework.Coding project with Python and SQLite3.</Typography>
                                </TimelineContent>
                              </TimelineItem>
                            </Timeline>
                          </Card>  
                        </Grid>
                      </Grid>
                    </Grid>
                </Grid>
            </Container>
        </main>
    </div>
  
  );
}

