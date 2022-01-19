import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import generateMessage, {Message} from './Api';

const App: React.FC<Record<string, never>> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages((oldMessages) => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  return (
    <ThemeProvider theme={{colors: {error: 'red'}}}>
      <div>
        {messages?.map?.((msg) => (
          <div key={msg?.message}>{msg?.message}</div>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default App;
