import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/common/IconButton';
import { Help } from '@material-ui/icons';
import { Container } from './styles';
import Tutorial from './components/Tutorial';

const Header = ({ setIsOpen, setData }) => {
  const handleClick = useCallback(() => {
    const data = {
      content: <Tutorial />,
    };
    setData(data);
    setIsOpen(true);
  }, [setIsOpen, setData]);

  return (
    <Container>
      <IconButton onClick={handleClick}>
        <Help />
      </IconButton>
    </Container>
  );
};

Header.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Header;
