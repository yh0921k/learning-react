import PropTypes from 'prop-types';

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

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
