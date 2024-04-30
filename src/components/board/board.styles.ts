import { createStyles } from '@material-ui/core/styles';

const styles = (): ReturnType<typeof createStyles> =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flex: 1,
    },
  });

export default styles;
