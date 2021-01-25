import { connect } from 'react-redux';
import { setCurrentPage } from 'redux/slices/book.slice';
import ShelfNavigation from '../index';

const mapStateToProps = (state) => ({
  books: state.book.books,
  currentPage: state.book.currentPage,
});

const mapDispatch = { setCurrentPage };

export default connect(mapStateToProps, mapDispatch)(ShelfNavigation);
