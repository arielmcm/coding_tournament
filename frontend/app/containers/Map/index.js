import { compose } from 'redux';
import Map from './Map';
import saga from './saga';
import reducer from './reducer';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

const withReducer = injectReducer({ key: 'map', reducer });
const withSaga = injectSaga({ key: 'newEvent', saga });

export default compose(withReducer, withSaga)(Map);
