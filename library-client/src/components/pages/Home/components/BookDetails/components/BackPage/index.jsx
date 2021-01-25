import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  BarCode,
  BlurbContainer,
  Blurb,
  BarCodeContainer,
} from './styles';

const BackPage = ({ isbn }) => {
  const blurbs = useMemo(() => new Array(8).fill(-1), []);

  return (
    <Container>
      <BlurbContainer>
        {blurbs.map((v, i) => (
          <Blurb key={`${v}-blurb-${i}`} />
        ))}
      </BlurbContainer>
      <BarCodeContainer>
        <BarCode>
          <p style={{ margin: 0 }}>{isbn}</p>
        </BarCode>
      </BarCodeContainer>
    </Container>
  );
};

BackPage.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default BackPage;
