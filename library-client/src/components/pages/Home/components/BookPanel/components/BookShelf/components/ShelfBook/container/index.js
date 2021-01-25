import { connect } from 'react-redux';
import { setData, setIsOpen } from 'redux/slices/dialog.slice';
import ShelfBook from '../index';

const mapStateToProps = () => ({});

const mapDispatch = { setData, setIsOpen };

export default connect(mapStateToProps, mapDispatch)(ShelfBook);
