import { createStyles } from '@material-ui/core/styles';

const styles = (): ReturnType<typeof createStyles> =>
  createStyles({
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  });

export default styles;
