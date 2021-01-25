import { connect } from 'react-redux';
import { setIsOpen } from 'redux/slices/dialog.slice';
import { fetchBooks } from 'redux/slices/book.slice';
import Home from '../index';

const mapStateToProps = (state) => ({
  isOpen: state.dialog.isOpen,
  dialogData: state.dialog.data,
});

const mapDispatch = { setIsOpen, fetchBooks };

export default connect(mapStateToProps, mapDispatch)(Home);
