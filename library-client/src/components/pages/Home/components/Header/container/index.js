import { connect } from 'react-redux';
import { setIsOpen, setData } from 'redux/slices/dialog.slice';
import Header from '../index';

const mapStateToProps = () => ({});

const mapDispatch = { setIsOpen, setData };

export default connect(mapStateToProps, mapDispatch)(Header);
