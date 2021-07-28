import React from 'react';
import ColorBox from './contexts/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColor from './contexts/SelectColor';

const App = () => {
  return (
    <ColorProvider value={{ color: 'red' }}>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
