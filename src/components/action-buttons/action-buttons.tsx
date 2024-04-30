import { FC, forwardRef, memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import type { ActionButtonsType } from './action-buttons.types';
import styles from './action-buttons.styles';

const ActionButtons: FC<ActionButtonsType> = forwardRef<HTMLDivElement, ActionButtonsType>((props, ref) => {
  const { classes, stopButton, clearButton } = props;

  return (
    <div className={classes.container} ref={ref}>
      <Button className={classes.leftRoot} variant="contained" size="small" onClick={stopButton?.onClick}>
        {stopButton?.text || 'stop'}
      </Button>

      <Button className={classes.rightRoot} variant="contained" size="small" onClick={clearButton?.onClick}>
        {clearButton?.text || 'clear'}
      </Button>
    </div>
  );
});

export default withStyles(styles)(ActionButtons);
export const MemoizedActionButtons = memo(withStyles(styles)(ActionButtons));
