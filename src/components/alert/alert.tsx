import { FC, memo } from 'react';
import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Alert: FC<{ text?: string } & SnackbarProps> = (props) => {
  const { text, ...rest } = props;
  return (
    <Snackbar
      key={text}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={2000}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{text}</span>}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={rest.onClose as () => void}>
          <CloseIcon />
        </IconButton>,
      ]}
      {...rest}
    />
  );
};

export default Alert;
export const MemoizedAlert = memo(Alert);
