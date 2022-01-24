import {FC, memo} from 'react';
import {withStyles} from '@material-ui/core/styles';

import List from '../list';
import type {BoardType} from './board.types';
import styles from './board.styles';
import {useMessages} from '../../contexts';

const Board: FC<BoardType> = (props) => {
  const {classes, topOffset} = props;
  const {state} = useMessages();
  const {errorMessages, warnMessages, infoMessages} = state;
  const labelHeaderError = props.labelHeaderError ?? 'Error Type 1';
  const labelHeaderWarn = props.labelHeaderWarn ?? 'Error Type 2';
  const labelHeaderInfo = props.labelHeaderInfo ?? 'Error Type 3';
  const em = props.errorMessages ?? errorMessages;
  const wm = props.warnMessages ?? warnMessages;
  const im = props.infoMessages ?? infoMessages;

  return (
    <div className={classes.root}>
      <List messages={em} count={em.length.toString()} topOffset={topOffset} labelHeader={labelHeaderError} />
      <List messages={wm} count={wm.length.toString()} topOffset={topOffset} labelHeader={labelHeaderWarn} />
      <List messages={im} count={im.length.toString()} topOffset={topOffset} labelHeader={labelHeaderInfo} />
    </div>
  );
};

export default withStyles(styles)(Board);
export const MemoizedBoard = memo(withStyles(styles)(Board));
