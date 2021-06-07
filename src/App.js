import './App.css'
function App() {
  const name = "React";
  return (
    <>
			{/* 주석은 이렇게 표기 */}
			<div
				className="react" // 시작 태그를 여러 줄로 작성한다면 이렇게 가능
			>
				{name}
			</div>
			// 하지만 이런 주석이나
			/* 이런 주석은 페이지에 그대로 노출된다. */
			<input />
		</>
  );
}

export default App;
