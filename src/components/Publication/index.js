import React from 'react';
import PropTypes from 'prop-types';
import { StyledPublication, H2, P } from '../Components.styled';

const Publication = ({ index, item }) => {
  const { title, text } = item;
  return (
    <StyledPublication>
      <H2>
        {index}.{title}
      </H2>
      <P>{text}</P>
    </StyledPublication>
  );
};

Publication.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Publication;
