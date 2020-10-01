import React from 'react';
import ContextHooksExample from './components/ContextHooksExample';
import UseReducerHookExample from './components/UseReducerHookExample';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {

  return (
    <div className="App">
      <UserContext.Provider value={'ashwani dohray'}>
        <ChannelContext.Provider value={"codevaluation"}>
          <ContextHooksExample />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <UseReducerHookExample />
    </div>
  );
}

export default App;
