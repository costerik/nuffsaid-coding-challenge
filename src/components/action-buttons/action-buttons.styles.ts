import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme): ReturnType<typeof createStyles> =>
  createStyles({
    container: {
      justifyContent: 'center',
      display: 'flex',
      marginTop: '2.5px',
      marginBottom: '30px',
    },
    leftRoot: {
      backgroundColor: theme.colors.info,
      marginRight: '2.5px',
    },
    rightRoot: {
      backgroundColor: theme.colors.info,
      marginLeft: '2.5px',
    },
  });

export default styles;
