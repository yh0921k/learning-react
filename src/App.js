import React, { Suspense, useState } from 'react';

const SplitMe = React.lazy(() => import('./code-splitting/SplitMe'));

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <p onClick={onClick}>Hello React</p>
      <Suspense fallback={<div>loading...</div>}>
        {visible && <SplitMe />}
      </Suspense>
    </div>
  );
};

export default App;
