import { connect } from 'react-redux';
import BookShelf from '../index';

const mapStateToProps = (state) => ({
  books: state.book.books,
  currentPage: state.book.currentPage,
});

export default connect(mapStateToProps)(BookShelf);
