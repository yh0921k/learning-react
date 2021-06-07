// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       Hello {name} <br />
//       Hello {children}
//     </div>
//   );
// };

const MyComponent = ({ name, children }) => {
  return (
    <div>
      Hello {name} <br />
      Hello {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'JAVA',
};

export default MyComponent;
