import {createContext, useReducer, useContext, FC, useEffect, useCallback} from 'react';
import {Priority} from '../../Api';
import {useMessages as useMessagesHook} from '../../hooks';
import {Received, MessagesContextType} from './messages.types';
import {messagesReducer, initialState} from './reducer';

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

const MessagesProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(messagesReducer, initialState);
  const {stop} = state;

  const dispatchSwitchFlow = useCallback((): void => dispatch({type: Received.SwitchFlowMessages}), []);
  const dispatchClear = useCallback((): void => dispatch({type: Received.Clear}), []);
  const dispatchClearMessage = useCallback(
    (messageType: Priority, index: number): void =>
      dispatch({
        type: Received.ClearMessage,
        payload: {
          messageType,
          index,
        },
      }),
    [],
  );

  const [messages] = useMessagesHook();

  useEffect(() => {
    const [message] = messages.slice(-1);
    if (!stop) {
      if (message?.priority === Priority['Warn']) dispatch({type: Received.WarnMessage, payload: message});
      if (message?.priority === Priority['Info']) dispatch({type: Received.InfoMessage, payload: message});
      if (message?.priority === Priority['Error']) dispatch({type: Received.ErrorMessage, payload: message});
    }
  }, [messages, stop]);

  return (
    <MessagesContext.Provider
      value={{
        state,
        dispatch,
        dispatchSwitchFlow,
        dispatchClear,
        dispatchClearMessage,
        ...state,
      }}>
      {children}
    </MessagesContext.Provider>
  );
};

const useMessages = (): MessagesContextType => {
  const context = useContext(MessagesContext);
  if (context === undefined) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
};

export {MessagesProvider, useMessages};
