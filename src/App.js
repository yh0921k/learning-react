function App() {
  const name = "React"
  const number = 0
  return (
    <> 
      {name === 'React' && <h1>This is React</h1>}
      {number && <div>React</div>}
      <h2>Hello JavaScript!</h2>
    </>
  );
}

export default App;
