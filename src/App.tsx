import {FC} from 'react';
import {ThemeProvider} from 'styled-components';

import theme from './theme';
import {useMessages} from './hooks';

const App: FC<Record<string, never>> = () => {
  const [messages] = useMessages();

  return (
    <ThemeProvider theme={theme}>
      <div>
        {messages?.map?.((msg) => (
          <div key={msg?.message}>{msg?.message}</div>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default App;
