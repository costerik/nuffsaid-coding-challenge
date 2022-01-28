import {createStyles} from '@material-ui/core/styles';

const styles = (): ReturnType<typeof createStyles> =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  });

export default styles;
