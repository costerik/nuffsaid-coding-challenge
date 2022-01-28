import {FC, RefObject} from 'react';
import ActionButtons from './action-buttons';
import {useMessages} from 'contexts';

const ContainerActionButtons: FC<{innerRef: RefObject<HTMLDivElement>}> = (props) => {
  const {stop, dispatchSwitchFlow, dispatchClear} = useMessages();
  return (
    <ActionButtons
      stopButton={{
        onClick: dispatchSwitchFlow,
        text: stop ? 'start' : 'stop',
      }}
      clearButton={{
        onClick: dispatchClear,
      }}
      {...props}
    />
  );
};

export default ContainerActionButtons;
