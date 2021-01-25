import { connect } from 'react-redux';
import { setIsOpen, setData } from 'redux/slices/dialog.slice';
import { setSelectedBook } from 'redux/slices/book.slice';
import LibrarianPanel from '../index';

const mapStateToProps = (state) => ({
  books: state.book.books,
});

const mapDispatch = { setIsOpen, setData, setSelectedBook };

export default connect(mapStateToProps, mapDispatch)(LibrarianPanel);
