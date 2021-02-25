import React from 'react';

import Button from '@material-ui/core/Button';

import { useStyles } from './styles';

import googleIcon from '../../assets/google-icon.png';

interface ButtonSignIn{
  children: String
}

export function ButtonSignInGoogle(props: ButtonSignIn){
  const styles = useStyles();
  
  return(
    <Button className={styles.button}>
      <img src={googleIcon} alt="botão logar com o goole" className={styles.img}/>
      {props.children}
    </Button>
  )
}