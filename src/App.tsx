import '@fontsource/roboto';
import {FC, useRef, useCallback} from 'react';
import {withStyles, createStyles, WithStyles} from '@material-ui/core/styles';
import {Header, ActionButtons, Board} from './components';
import {MessagesProvider} from './contexts';

const styles = (): ReturnType<typeof createStyles> =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  });

type AppType = Record<string, never> & WithStyles<typeof styles>;

const App: FC<AppType> = (props) => {
  const {classes} = props;
  const headerRef = useRef<HTMLElement>(null);
  const actionsButtonsRef = useRef<HTMLDivElement>(null);
  const topOffset = useCallback(
    (): number => (headerRef?.current?.offsetHeight || 0) + (actionsButtonsRef?.current?.offsetHeight || 0),
    [],
  );

  return (
    <MessagesProvider>
      <div className={classes.root}>
        <Header title={'nuffsiad.com coding challenge'} innerRef={headerRef} />
        <ActionButtons innerRef={actionsButtonsRef} />
        <Board topOffset={topOffset} />
      </div>
    </MessagesProvider>
  );
};

export default withStyles(styles)(App);
