import { connect } from 'react-redux';
import { setData, setIsOpen } from 'redux/slices/dialog.slice';
import { fetchBookDetails, setBook } from 'redux/slices/book.slice';
import ShelfBook from '../index';

const mapStateToProps = () => ({});

const mapDispatch = { setData, setIsOpen, fetchBookDetails, setBook };

export default connect(mapStateToProps, mapDispatch)(ShelfBook);
