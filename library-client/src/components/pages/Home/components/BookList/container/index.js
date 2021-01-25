import { connect } from 'react-redux';
import { setData } from 'redux/slices/dialog.slice';
import { fetchBookDetails } from 'redux/slices/book.slice';
import BookList from '../index';

const mapStateToProps = (state) => ({
  books: state.book.books,
});

const mapDispatch = { setData, fetchBookDetails };

export default connect(mapStateToProps, mapDispatch)(BookList);
