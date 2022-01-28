import {WithStyles, Theme} from '@material-ui/core/styles';
import {Message} from '../../utilities';
import styles from './card.styles';

export type CardType = {
  onClick?: () => void;
  buttonText?: string;
  theme: Theme;
} & Message &
  WithStyles<typeof styles>;
