import { memo, FC, ReactNode } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import VirtualizedList from 'react-virtualized/dist/commonjs/List';
import VirtualizedAutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import type { ListRowProps } from 'react-virtualized';

import { Card } from 'components';
import styles from './list.styles';
import type { ListType, ListHeaderType } from './list.types';

const ListHeader: FC<ListHeaderType> = (props) => {
  const { label = '', sublabel = 'Count', count = '0' } = props;
  return (
    <Paper elevation={0}>
      <Typography variant="headline">{label}</Typography>
      <Typography variant="subheading">{`${sublabel} ${count}`}</Typography>
    </Paper>
  );
};

const List: FC<ListType> = (props) => {
  const { messages, labelHeader, sublabelHeader, count, classes, topOffset, onClick } = props;
  const rowRenderer: FC<ListRowProps> = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        <Card
          {...messages[index]}
          onClick={(): void => onClick && onClick(messages[index].priority, index)}
        />
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <ListHeader label={labelHeader} sublabel={sublabelHeader} count={count} />
      <VirtualizedAutoSizer>
        {({ width, height }): ReactNode => {
          return (
            <VirtualizedList
              height={height - ((topOffset && topOffset()) || 0)}
              width={width * 0.95}
              rowCount={messages.length}
              rowHeight={150}
              rowRenderer={rowRenderer}
            />
          );
        }}
      </VirtualizedAutoSizer>
    </div>
  );
};

export default withStyles(styles)(List);
export const MemoizedList = memo(withStyles(styles)(List));
