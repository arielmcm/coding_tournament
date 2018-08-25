import NewEvent from './NewEvent';
import { compose } from 'redux';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import injectReducer from '../../utils/injectReducer';

const withReducer = injectReducer({ key: 'newEvent', reducer });
const withSaga = injectSaga({ key: 'newEvent', saga });

export default compose(withReducer, withSaga)(NewEvent);
