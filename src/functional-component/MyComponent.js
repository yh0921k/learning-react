import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      Hello {name} <br />
      Hello {children} <br />
      My Favorite Number is {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'JAVA',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
