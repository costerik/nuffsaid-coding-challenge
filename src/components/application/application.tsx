import '@fontsource/roboto';
import { FC, useRef, useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Header, ContainerActionButtons, ContainerBoard } from 'components';
import { MessagesProvider } from 'contexts';
import type { ApplicationType } from './application.types';
import styles from './application.styles';

const App: FC<ApplicationType> = (props) => {
  const { classes } = props;
  const headerRef = useRef<HTMLElement>(null);
  const actionButtonsRef = useRef<HTMLDivElement>(null);
  const topOffset = useCallback(
    (): number => (headerRef?.current?.offsetHeight || 0) + (actionButtonsRef?.current?.offsetHeight || 0),
    [],
  );

  return (
    <MessagesProvider>
      <div className={classes.root}>
        <Header title={'nuffsiad.com coding challenge'} innerRef={headerRef} />
        <ContainerActionButtons innerRef={actionButtonsRef} />
        <ContainerBoard topOffset={topOffset} />
      </div>
    </MessagesProvider>
  );
};

export default withStyles(styles)(App);
