import Home from './Home'
import Play from './Play'
import QuerySync from './QuerySync'
import DraggableSort from './DraggableSort'

export default {
  '/': () => <Home />,
  '/play': () => <QuerySync />,
  '/drag': () => <DraggableSort />,
}
