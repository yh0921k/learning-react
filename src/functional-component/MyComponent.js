const MyComponent = (props) => {
  return <div>Hello {props.name}</div>;
};

MyComponent.defaultProps = {
  name: 'JAVA',
};

export default MyComponent;
