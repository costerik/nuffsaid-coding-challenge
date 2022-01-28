import {Message, Priority} from 'utilities';

export enum Received {
  ErrorMessage,
  WarnMessage,
  InfoMessage,
  SwitchFlowMessages,
  Clear,
  ClearMessage,
  Snackbar,
}

export type Action =
  | {type: Received.WarnMessage | Received.InfoMessage | Received.ErrorMessage; payload: Message}
  | {
      type: Received.Clear | Received.SwitchFlowMessages;
    }
  | {
      type: Received.ClearMessage;
      payload: {
        messageType: Priority;
        index: number;
      };
    }
  | {
      type: Received.Snackbar;
      payload: {
        message?: Message;
        show: boolean;
      };
    };
export type Dispatch = (action: Action) => void;
export type State = {
  errorMessages: Message[];
  warnMessages: Message[];
  infoMessages: Message[];
  stop: boolean;
  snackbar: {
    message?: Message;
    show: boolean;
  };
};
export type MessagesContextType = {
  state: State;
  dispatch: Dispatch;
  dispatchSwitchFlow: () => void;
  dispatchClear: () => void;
  dispatchClearMessage: (messageType: Priority, index: number) => void;
  dispatchSwitchSnackbar: (data: State['snackbar']) => void;
} & State;
