import {WithStyles} from '@material-ui/core/styles';
import {Message} from '../../Api';
import styles from './list.styles';

export type ListType = {
  messages: Message[];
  labelHeader?: string;
  sublabelHeader?: string;
  count?: string;
  topOffset?: number;
} & WithStyles<typeof styles>;

export type ListHeaderType = {label?: string; sublabel?: string; count?: string};
