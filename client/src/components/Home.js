import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root_home: {
    flexGrow: 1,
    backgroundColor:grey[900],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 280,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root_home}>
        <main className={classes.content}>
            <div className={classes.drawerHeader} />
            <Container maxWidth="sm">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs>
                    <Paper className={classes.paper}>
                        <Grid 
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item>
                                <Link to="/profile">
                                    <Button color="primary" variant="contained">CV Profile</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>

    </div>
  );
}