import {WithStyles} from '@material-ui/core/styles';
import styles from './application.styles';

export type ApplicationType = Record<string, never> & WithStyles<typeof styles>;
