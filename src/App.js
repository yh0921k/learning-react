function App() {
  const name = "React";
  const style = { 
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: '48px',
		fontWeight: 'bold',
		padding: 16 // 단위를 생략하면 px
	};
  return <div style={style}>{name}</div>;
}

export default App;
