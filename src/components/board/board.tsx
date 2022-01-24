import {FC, memo} from 'react';
import {withStyles} from '@material-ui/core/styles';

import List from '../list';
import type {BoardType} from './board.types';
import styles from './board.styles';

const Board: FC<BoardType> = (props) => {
  const {classes, topOffset} = props;
  const labelHeaderError = props.labelHeaderError ?? 'Error Type 1';
  const labelHeaderWarn = props.labelHeaderWarn ?? 'Error Type 2';
  const labelHeaderInfo = props.labelHeaderInfo ?? 'Error Type 3';
  const errorMessages = props.errorMessages ?? [];
  const warnMessages = props.warnMessages ?? [];
  const infoMessages = props.infoMessages ?? [];

  return (
    <div className={classes.root}>
      <List messages={errorMessages} topOffset={topOffset} labelHeader={labelHeaderError} />
      <List messages={warnMessages} topOffset={topOffset} labelHeader={labelHeaderWarn} />
      <List messages={infoMessages} topOffset={topOffset} labelHeader={labelHeaderInfo} />
    </div>
  );
};

export default withStyles(styles)(Board);
export const MemoizedBoard = memo(withStyles(styles)(Board));
