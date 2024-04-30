import { FC, RefObject, forwardRef, memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import RootRef from '@material-ui/core/RootRef';

import type { HeaderType } from './header.types';
import styles from './header.styles';

const Header: FC<HeaderType> = forwardRef<HTMLElement, HeaderType>((props, ref) => {
  const { classes, title } = props;
  return (
    <RootRef rootRef={ref as RefObject<HTMLElement>}>
      <AppBar className={classes.root} position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
        <Divider />
      </AppBar>
    </RootRef>
  );
});

export default withStyles(styles)(Header);
export const MemoizedHeader = memo(withStyles(styles)(Header));
