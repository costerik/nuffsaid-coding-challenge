import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import generateMessage, {Message} from '../../Api';

const useMessages = (): [messages: Message[], setMessages: Dispatch<SetStateAction<Message[]>>] => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages((oldMessages) => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  return [messages, setMessages];
};

export default useMessages;
