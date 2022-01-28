import {WithStyles} from '@material-ui/core/styles';
import {SnackbarProps} from '@material-ui/core/Snackbar';
import styles from './board.styles';
import {Message} from '../../utilities';
import {ListType} from '../list/list.types';

export type BoardType = {
  topOffset?: () => number;
  labelHeaderError?: string;
  labelHeaderWarn?: string;
  labelHeaderInfo?: string;
  errorCount?: string;
  warnCount?: string;
  infoCount?: string;
  errorMessages?: Message[];
  warnMessages?: Message[];
  infoMessages?: Message[];
  alert?: {text?: string} & SnackbarProps;
  list?: Partial<ListType>;
} & WithStyles<typeof styles>;
