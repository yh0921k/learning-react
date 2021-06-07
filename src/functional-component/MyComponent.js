const MyComponent = (props) => {
  return (
    <div>
      Hello {props.name} <br />
      Hello {props.children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'JAVA',
};

export default MyComponent;
