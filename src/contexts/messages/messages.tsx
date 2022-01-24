import {createContext, useReducer, useContext, FC, useEffect} from 'react';
import {Priority} from '../../Api';
import {useMessages as useMessagesHook} from '../../hooks';
import {Received, MessagesContextType} from './messages.types';
import {messagesReducer, initialState} from './reducer';

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

const MessagesProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(messagesReducer, initialState);

  const [messages] = useMessagesHook();
  useEffect(() => {
    const [message] = messages.slice(-1);
    if (message?.priority === Priority['Warn']) dispatch({type: Received.WarnMessage, payload: message});
    if (message?.priority === Priority['Info']) dispatch({type: Received.InfoMessage, payload: message});
    if (message?.priority === Priority['Error']) dispatch({type: Received.ErrorMessage, payload: message});
  }, [messages]);

  return (
    <MessagesContext.Provider
      value={{
        state,
        dispatch,
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
