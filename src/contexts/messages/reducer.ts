import {State, Action, Received} from './messages.types';

export const initialState = {
  errorMessages: [],
  warnMessages: [],
  infoMessages: [],
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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
