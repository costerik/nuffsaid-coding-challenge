import {WithStyles} from '@material-ui/core/styles';
import {Message} from '../../utilities';
import {MessagesContextType} from '../../contexts/messages/messages.types';
import styles from './list.styles';

export type ListType = {
  messages: Message[];
  labelHeader?: string;
  sublabelHeader?: string;
  count?: string;
  topOffset?: () => number;
  onClick?: MessagesContextType['dispatchClearMessage'];
} & WithStyles<typeof styles>;

export type ListHeaderType = {label?: string; sublabel?: string; count?: string};
