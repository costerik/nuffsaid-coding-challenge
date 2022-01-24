import {WithStyles} from '@material-ui/core/styles';
import styles from './board.styles';
import {Message} from '../../Api';

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
} & WithStyles<typeof styles>;
