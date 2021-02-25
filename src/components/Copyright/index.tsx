import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Made with ReactJS by '}
      <Link color="inherit" href="https://devleo.com.br">
        { 'Leonardo Alves' }
      </Link>{' '}
    </Typography>
  );
}