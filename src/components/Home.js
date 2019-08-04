import React from 'react';
import { Button, CssBaseline, Grid, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  layout: {
    width: '100%',
    margin: 'auto',
    alignItems: 'center',
    [theme.breakpoints.up(900 + theme.spacing(6))]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  homeContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`,
  },
  homeButton: {
    marginTop: theme.spacing(4),
  },
});

const Home = (props) => {
  // const { classes, match, ObservableMenuStore } = this.props;
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
        <div>
          <div className={classes.homeContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              <strong>China II</strong>
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Best <strong>New York Style</strong> Chinese Take Out in Sanford, FL.
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Open for <strong>15+</strong> years!
            </Typography>
            <div className={classes.homeButton}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Give us a call!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Directions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
export default withStyles(styles)(Home);
