import { FC, memo } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Alert, List } from 'components';
import type { BoardType } from './board.types';
import styles from './board.styles';

const Board: FC<BoardType> = (props) => {
  const {
    classes,
    topOffset,
    errorMessages,
    warnMessages,
    infoMessages,
    alert = { open: false },
    list,
  } = props;
  const labelHeaderError = props.labelHeaderError ?? 'Error Type 1';
  const labelHeaderWarn = props.labelHeaderWarn ?? 'Error Type 2';
  const labelHeaderInfo = props.labelHeaderInfo ?? 'Error Type 3';

  return (
    <div className={classes.root}>
      <List
        messages={errorMessages ?? []}
        count={errorMessages?.length.toString() ?? '0'}
        topOffset={topOffset}
        labelHeader={labelHeaderError}
        onClick={list?.onClick}
      />
      <List
        messages={warnMessages ?? []}
        count={warnMessages?.length.toString() ?? '0'}
        topOffset={topOffset}
        labelHeader={labelHeaderWarn}
        onClick={list?.onClick}
      />
      <List
        messages={infoMessages ?? []}
        count={infoMessages?.length.toString() ?? '0'}
        topOffset={topOffset}
        labelHeader={labelHeaderInfo}
        onClick={list?.onClick}
      />
      <Alert {...alert} />
    </div>
  );
};

export default withStyles(styles)(Board);
export const MemoizedBoard = memo(withStyles(styles)(Board));
