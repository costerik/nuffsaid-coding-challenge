import { createStyles } from '@material-ui/core/styles';

const styles = (): ReturnType<typeof createStyles> =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
    },
  });

export default styles;
