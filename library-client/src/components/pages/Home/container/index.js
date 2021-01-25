import { connect } from 'react-redux';
import { setIsOpen } from 'redux/slices/dialog.slice';
import Home from '../index';

const mapStateToProps = (state) => ({
  isOpen: state.dialog.isOpen,
  dialogData: state.dialog.data,
});

const mapDispatch = { setIsOpen };

export default connect(mapStateToProps, mapDispatch)(Home);
