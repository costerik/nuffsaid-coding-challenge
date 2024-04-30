import { WithStyles } from '@material-ui/core/styles';
import styles from './action-buttons.styles';

type ButtonType = {
  text?: string;
  onClick: () => void;
};

export type ActionButtonsType = {
  stopButton?: ButtonType;
  clearButton?: ButtonType;
} & WithStyles<typeof styles>;
