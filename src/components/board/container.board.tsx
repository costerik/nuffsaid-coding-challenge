import { FC, useCallback } from 'react';
import { useMessages } from 'contexts';
import Board from './board';

const ContainerBoard: FC<{ topOffset?: () => number }> = (props) => {
  const {
    errorMessages,
    warnMessages,
    infoMessages,
    snackbar: { show, message },
    dispatchSwitchSnackbar,
    dispatchClearMessage,
  } = useMessages();

  const onClose = useCallback(
    (_, reason) => {
      if (reason === 'clickaway') return;
      dispatchSwitchSnackbar({ show: false });
    },
    [dispatchSwitchSnackbar],
  );

  return (
    <Board
      errorMessages={errorMessages}
      warnMessages={warnMessages}
      infoMessages={infoMessages}
      alert={{
        onClose,
        text: message?.message,
        open: show,
      }}
      list={{
        onClick: dispatchClearMessage,
      }}
      {...props}
    />
  );
};

export default ContainerBoard;
