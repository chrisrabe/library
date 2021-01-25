import React, { useMemo } from 'react';
import {
  Container,
  BarCode,
  BlurbContainer,
  Blurb,
  BarCodeContainer,
} from './styles';

const BackPage = () => {
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
          <p style={{ margin: 0 }}>ISBN: 23125-4141-2312</p>
        </BarCode>
      </BarCodeContainer>
    </Container>
  );
};

export default BackPage;
