import Loadable from 'react-loadable'

import LoadinIndicatior from '../../components/commom/LoadingIndicator'

export default Loadable({
  loader: () => import('./index'),
  loading: LoadinIndicatior,
})
