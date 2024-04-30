import { WithStyles } from '@material-ui/core/styles';
import styles from './header.styles';

export type HeaderType = {
  title?: string;
} & WithStyles<typeof styles>;
