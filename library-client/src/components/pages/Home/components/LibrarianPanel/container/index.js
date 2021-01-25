import { connect } from 'react-redux';
import { setIsOpen, setData } from 'redux/slices/dialog.slice';
import { setSelectedBook, addBook } from 'redux/slices/book.slice';
import LibrarianPanel from '../index';

const mapStateToProps = () => ({});

const mapDispatch = { setIsOpen, setData, setSelectedBook, addBook };

export default connect(mapStateToProps, mapDispatch)(LibrarianPanel);
