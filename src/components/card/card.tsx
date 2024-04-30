import { memo } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import type { CardType } from './card.types';
import styles from './card.styles';
import { Priority } from 'utilities';

const LocalMuiCard = styled(MuiCard)<Partial<CardType>>`
  background-color: ${(props): string => {
    if (props.priority === Priority['Warn']) return props.theme.colors.warning;
    if (props.priority === Priority['Info']) return props.theme.colors.info;
    return props.theme.colors.error;
  }};
`;

const Card: React.FC<CardType> = (props) => {
  const { buttonText = 'Clear', onClick, message, classes, priority, theme } = props;
  return (
    <LocalMuiCard priority={priority} theme={theme}>
      <CardContent>
        <Typography>{message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button onClick={onClick} size="small">
          {buttonText}
        </Button>
      </CardActions>
    </LocalMuiCard>
  );
};

const ThemeCard = withTheme()(Card);

export default withStyles(styles)(ThemeCard);
export const MemoizedCard = memo(withStyles(styles)(ThemeCard));
