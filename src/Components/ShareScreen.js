import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import Highlight from 'react-highlight.js';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#f0f0f0',
    height: '100vh',
  },
  title: {
    paddingTop: '1rem',
    paddingBotton: '1rem',
  },
  subHeading: {
    textIndent: '50px',
  },
}));

export default function SignUp(json) {
  const classes = useStyles();
  const { code, date, lang, output } = json.json; // wtf dunno why this does this

  return (
    <div className={classes.background}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Typography variant="h2" align="center" className={classes.title}>
          Evaller Share
        </Typography>
        <Divider />
        <Typography variant="body1" className={classes.title}>
          Here is your evalualuated Code!
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Code Info:
        </Typography>
        <Typography variant="body1" className={classes.subHeading}>
          Written in:{' '}
          <span style={{ backgroundColor: '#fff' }}>
            {lang || 'something broke'}
          </span>
        </Typography>
        <Typography variant="body1" className={classes.subHeading}>
          Originally saved in:{' '}
          <span style={{ backgroundColor: '#fff' }}>
            {Date(date * 1000) || 'something broke'}
          </span>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Code:
        </Typography>
        <Typography variant="body1" className={classes.subHeading} >
          Input:
        </Typography>
        <Highlight language="javascript" style={{ marginTop: '0' }}>
          {code || 'something broke'}
        </Highlight>
        <Typography variant="body1" className={classes.subHeading}>
          Output:
        </Typography>
        <Highlight language="javascript" style={{ marginTop: '0' }}>
          {output || 'something broke'}
        </Highlight>
        <Copyright />
      </Container>
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Evaller {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
