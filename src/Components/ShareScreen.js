import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function SignUp() {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography>Test</Typography>
      <Copyright />
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Evaller
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}