import React, { Component, useEffect, useRef, useState } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: null,
  };
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      // return <p>There is some error</p>
      // return this.props.fallback;
      return <this.props.fallback error={error} />;
    }
    return this.props.children;
  }
}

const Fallback = ({ error }) => {
  alert(error.message);
  return <p>THERE is some ERROR...</p>;
};

const Child = () => {
  throw new Error('Something Wrong...');
  return <p>Child</p>;
};

const App = () => {
  return (
    <>
      <p>App</p>
      <ErrorBoundary /* fallback={<p>There is some Error</p>} */
        /* fallback={<Fallback />} */
        fallback={Fallback}
      >
        <Child />
      </ErrorBoundary>
    </>
  );
};

export default App;
