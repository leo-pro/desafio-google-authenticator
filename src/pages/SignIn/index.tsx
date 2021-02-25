import React from 'react';
import { Link } from 'react-router-dom';

import {
  Avatar,
  CssBaseline,
  Box,
  Grid,
  Typography,
  Container,
  Paper
} from '@material-ui/core';

import { ButtonSignInGoogle } from '../../components/ButtonSignInGoogle';
import { Copyright } from '../../components/Copyright';

import { useStyles } from './styles';


export default function SignIn() {
  const styles = useStyles(process.env.CLIENT_ID);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={1} style={{ padding: '0 2rem 2rem 2rem' }}>
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5" style={{ textAlign: 'center'}}>
            Clique para fazer Login com sua conta do Google
          </Typography>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={styles.grid}
        >
          <Link to="dashboard" style={{ textDecoration: 'none' }}>
            <ButtonSignInGoogle>
              Entrar com o Google
            </ButtonSignInGoogle>
          </Link>
        </Grid>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Paper>
    </Container>
  );
}