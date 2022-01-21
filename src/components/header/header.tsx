import {memo} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';

import type {HeaderType} from './header.types';
import styles from './header.styles';

const Header: React.FC<HeaderType> = (props) => {
  const {classes, title} = props;
  return (
    <AppBar className={classes.root} position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default withStyles(styles)(Header);
export const MemoizedHeader = memo(withStyles(styles)(Header));
