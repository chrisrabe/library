import { connect } from 'react-redux';
import BookDetails from '../index';

const mapStateToProps = (state) => ({
  selectedBook: state.book.selectedBook,
});

export default connect(mapStateToProps)(BookDetails);
