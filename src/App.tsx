import '@fontsource/roboto';
import {FC} from 'react';
import {withStyles, createStyles, WithStyles} from '@material-ui/core/styles';
import {Header, ActionButtons, Card} from './components';
import {Priority} from './Api';

//import {useMessages} from './hooks';

const styles = (): ReturnType<typeof createStyles> =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
  });

type AppType = Record<string, never> & WithStyles<typeof styles>;

const App: FC<AppType> = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Header title={'nuffsiad.com coding challenge'} />
      <ActionButtons />
      <Card message="hello" priority={Priority['Error']} />
      <Card message="hello" priority={Priority['Warn']} />
      <Card message="hello" priority={Priority['Info']} />
    </div>
  );
};

export default withStyles(styles)(App);
