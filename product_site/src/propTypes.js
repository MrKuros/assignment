import PropTypes from 'prop-types';

export const productShape = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export const productDisplayPropTypes = {
  product: PropTypes.shape(productShape).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
