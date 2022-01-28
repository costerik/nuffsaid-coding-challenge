import {State, Action, Received} from './messages.types';
import {Priority} from '../../utilities';

export const initialState = {
  errorMessages: [],
  warnMessages: [],
  infoMessages: [],
  stop: false,
  snackbar: {
    message: undefined,
    show: false,
  },
};

export const messagesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Received['ErrorMessage']: {
      return {
        ...state,
        errorMessages: [...state.errorMessages, action.payload],
      };
    }
    case Received['WarnMessage']: {
      return {
        ...state,
        warnMessages: [...state.warnMessages, action.payload],
      };
    }
    case Received['InfoMessage']: {
      return {
        ...state,
        infoMessages: [...state.infoMessages, action.payload],
      };
    }
    case Received['SwitchFlowMessages']: {
      return {
        ...state,
        stop: !state.stop,
      };
    }
    case Received['Clear']: {
      return {
        ...state,
        infoMessages: [],
        warnMessages: [],
        errorMessages: [],
      };
    }
    case Received['ClearMessage']: {
      let typeMsg: keyof Omit<State, 'stop'> = 'infoMessages';
      if (action.payload?.messageType === Priority.Error) typeMsg = 'errorMessages';
      if (action.payload?.messageType === Priority.Warn) typeMsg = 'warnMessages';
      const newMessages = [
        ...state[typeMsg].slice(0, action.payload.index),
        ...state[typeMsg].slice(action.payload.index + 1),
      ];
      return {
        ...state,
        [typeMsg]: newMessages,
      };
    }
    case Received['Snackbar']: {
      return {
        ...state,
        snackbar: {
          message: action.payload?.message,
          show: action.payload.show,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`);
    }
  }
};
