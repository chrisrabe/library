import { connect } from 'react-redux';
import { setData, setIsOpen } from 'redux/slices/dialog.slice';
import { fetchBookDetails, setBook } from 'redux/slices/book.slice';
import BookList from '../index';

const mapStateToProps = (state) => ({
  books: state.book.books,
});

const mapDispatch = { setData, fetchBookDetails, setIsOpen, setBook };

export default connect(mapStateToProps, mapDispatch)(BookList);
