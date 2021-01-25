import { connect } from 'react-redux';
import FormRequest from '../index';

const mapStateToProps = (state) => ({
  selectedBook: state.book.selectedBook,
});

export default connect(mapStateToProps)(FormRequest);
